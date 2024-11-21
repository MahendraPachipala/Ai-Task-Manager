"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CustomButton from "@components/buttons/Delete";
import Calendar from "@components/Calendar";
import Alert from "@components/Alert";
import Filter from "@components/buttons/filter";

const Deadlines = () => {
  const { data: session, status } = useSession();
  const [deadlines, setDeadlines] = useState([]);
  const [filteredemails, setFilteredemails] = useState([]);

  const [loading, setloading] = useState(true);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [alert, setAlert] = useState({
    message: "Loading new emails please wait...",
    status: 201,
  });

  useEffect(() => {
    const fetchEmails = async () => {
      if (status === "authenticated" && session) {
        try {
          const res = await axios.post("http://localhost:3000/api/get/emails", {
            session: session,
          });
          setDeadlines(res.data.data);
        } catch (error) {
          console.error("Error fetching emails:", error);
        }
      }
    };
    fetchEmails();
  }, [session, status]);

  useEffect(() => {
    const filterData = async () => {
      if (selectedDate == null) {
        setFilteredemails(deadlines);
        return;
      }
      const newdata = deadlines.filter((each) => {
        const eachDate = new Date(each._id);

        return (
          eachDate.getFullYear() === selectedDate.getFullYear() &&
          eachDate.getMonth() === selectedDate.getMonth() &&
          eachDate.getDate() === selectedDate.getDate()
        );
      });

      setFilteredemails(newdata);
    };

    filterData();
  }, [selectedDate,deadlines]);

  useEffect(() => {
    const fetchEmails = async () => {
      if (status === "authenticated" && session) {
        try {
          const res = await axios.post("http://localhost:3000/api/add/emails", {
            session: session,
          });
          if (res.status == 201) {
            setloading(false);
          }
        } catch (error) {
          console.error("Error fetching emails:", error);
        }
      }
    };
    fetchEmails();
  }, [session]);

  const handleDelete = async (taskId) => {
    try {
      setDeadlines((prevDeadlines) =>
        prevDeadlines.map((deadline) => ({
          ...deadline,
          Deadlines: deadline.Deadlines.filter((task) => task._id !== taskId),
        }))
      );
      await axios.delete("/api/delete/deadlines", {
        data: {
          userId: session.user.id,
          element_Id: taskId,
        },
      });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCalendarOpen = () => {
    setCalendarOpen((prev) => !prev);
    if(calendarOpen)setFiltersOpen((prev)=> !prev);
  };

  return (
    <div className="w-[100%] flex flex-col gap-6 my-5">
     
     <Filter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen} selectedDate={selectedDate} handleCalendarOpen={handleCalendarOpen} setSelectedDate={setSelectedDate}/>

      {calendarOpen && (
        <Calendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          className="left-10 top-20"
        />
      )}
      {calendarOpen && (
        <div
          onClick={handleCalendarOpen}
          className="fixed w-full h-screen z-10"
        ></div>
      )}


      {loading && <Alert alert={alert} setAlert={setAlert} Time={8000} />}
      {filteredemails.length === 0 && (
        <p className="text-center">No deadlines available.</p>
      )}

      {filteredemails.map((deadline) => {
        const date = new Date(deadline._id);
        const formattedDate = date
          .toLocaleDateString("en-GB", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })
          .replace(",", "");

        return (
          <div key={deadline._id}>
          {deadline.Deadlines.length>0&&
          <div className="w-[70%] flex gap-2 m-auto">
          <div className="w-[15%] font-medium  my-1">{formattedDate}</div>

              <div className="glassmorphism w-[76%] space-y-2 p-2">
              {deadline.Deadlines.map((task) => (
                <div
                  key={task._id}
                  className="glassmorphism flex justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <label className="select-none" htmlFor={task._id}>
                      <p className="font-semibold]">{task.subject}</p>
                      <p className="text-sm">{task.description}</p>
                    </label>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-500">{task.time}</p>

                    <div onClick={() => handleDelete(task._id)}>
                      <CustomButton />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Deadlines;
