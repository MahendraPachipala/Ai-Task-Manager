"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import CustomButton from "@components/buttons/Delete";

const Deadlines = () => {
  const { data: session, status } = useSession();
  const [deadlines, setDeadlines] = useState([]);

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

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/task/${taskId}`);
      setDeadlines((prevDeadlines) =>
        prevDeadlines.map((deadline) => ({
          ...deadline,
          Deadlines: deadline.Deadlines.filter((task) => task._id !== taskId),
        }))
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="w-[100%] flex flex-col gap-6 my-5">
      {deadlines.length === 0 && (
        <p className="text-center">No deadlines available.</p>
      )}

      {deadlines.map((deadline) => {
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
          <div key={deadline._id} className="w-[70%] flex gap-2 m-auto">
            <div className="w-[15%] font-medium  my-1">
              {formattedDate}
            </div>

            <div className="glassmorphism w-[76%] space-y-2 p-2">
              {deadline.Deadlines.map((task) => (
                <div
                  key={task._id}
                  className="glassmorphism flex justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <label className="select-none" htmlFor={task._id}>
                      <p className="font-semibold]">{task.subject}</p>
                      <p className="text-sm">
                        {task.description}
                      </p>
                    </label>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-500">{task.time}</p>
                    <button onClick={() => handleDelete(task._id)}>
                      <CustomButton />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deadlines;
