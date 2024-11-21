"use client";
import { React, useEffect, useState } from "react";
import DayTasksCard from "@components/DayTasksCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Calendar from "@components/Calendar";
import Alert from "@components/Alert";
import generatePDF from "@utils/pdfgenerator";
import Filter from "@components/buttons/filter";

const Tasks = () => {
  const { data: session } = useSession();
  const [docloading, setdocloading] = useState();
  const [data, setData] = useState([]);
  const [filteredata, setFilteredata] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [alert, setAlert] = useState({ message: "", status: 500 });
  const [prompt, setPrompt] = useState("");
  const [plan, setPlan] = useState([]);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState({
    generateLoading: false,
    Addloading: false,
  });
  const router = useRouter();

  const handleKeydown = (event) => {
    if (event.key == "Enter") {
      getDayPlan();
    }
  };
  useEffect(() => {
    if (!session) return;

    const fetchTasks = async () => {
      const res = await axios("/api/get/tasks", {
        headers: {
          userId: session.user.id,
          "Content-Type": "application/json",
        },
      });
      setData(res.data);
      setFilteredata(res.data);
    };

    fetchTasks();
  }, [session]);

  useEffect(() => {
    const filterData = async () => {
      if (selectedDate == null) {
        setFilteredata(data);
        return;
      }
      const newdata = data.filter((each) => {
        const eachDate = new Date(each._id);

        return (
          eachDate.getFullYear() === selectedDate.getFullYear() &&
          eachDate.getMonth() === selectedDate.getMonth() &&
          eachDate.getDate() === selectedDate.getDate()
        );
      });

      setFilteredata(newdata);
    };

    filterData();
  }, [selectedDate]);

  const getDayPlan = async () => {
    try {
      setLoading((prev) => ({ ...prev, generateLoading: true }));
      const res = await axios.post("/api/get/dayPlan", {
        userId: session.user.id,
        request: prompt,
      });
      setPlan(res.data.plan);
      setLoading((prev) => ({ ...prev, generateLoading: false }));
    } catch (err) {
      console.log(err);
    }
  };

  const AddDayPlan = async () => {
    try {
      setLoading((prev) => ({ ...prev, Addloading: true }));
      const res = await axios.post("/api/add/dayPlan", {
        userId: session.user.id,
        tasksArray: plan,
      });

      setAlert({
        message: res.data.message,
        status: res.status,
      });
      router.push("/Tasks");
      setIsopen(false);
      location.reload();
      setLoading((prev) => ({ ...prev, Addloading: false }));
    } catch (error) {
      setAlert({
        message: err.response.data.message,
        status: err.status,
      });
      console.error("Error adding day plan:", error);
    }
  };

  const handleOpen = () => {
    setIsopen((prev) => !prev);
  };

  const handleCalendarOpen = () => {
    setCalendarOpen((prev) => !prev);
    if(calendarOpen)setFiltersOpen((prev)=> !prev);
  };

  

  return (
    <div>
      <Alert alert={alert} setAlert={setAlert} Time={3000} />

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

      {/* Personalized Day Plan */}
      {isOpen && (
        <div
          onClick={handleOpen}
          className="fixed w-full backdrop-blur-lg  h-screen z-10"
        ></div>
      )}
      <div className=" overflow-y-scroll h-[100vh] w-[70%]  m-auto hide-scrollbar relative">
        <button
          className="glassmorphism fixed right-10 top-5 p-4"
          onClick={handleOpen}
        >
          Get Personalized Day Plan
        </button>

        {isOpen && (
          <div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 glassmorphism  p-6 w-[500px]">
              <div className="relative">
                <textarea
                  type="text"
                  placeholder="Enter your prompt here to generate a personalized schedule...."
                  className="w-full px-4 py-2 bg-[#363636] rounded-md h-24 text-white placeholder-gray-400 border-none outline-none mb-2"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleKeydown}
                />

                {plan.map((p, index) => {
                  return <p key={index}>{p}</p>;
                })}
                <div className="flex">
                  <button
                    onClick={getDayPlan}
                    className="flex justify-center align-center glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717] w-[100px]"
                  >
                    {loading.generateLoading ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </>
                    ) : (
                      <>{plan.length == 0 ? "Generate" : "Regenerate"}</>
                    )}
                  </button>
                  {plan.length != 0 && (
                    <>
                      <button
                        onClick={AddDayPlan}
                        className="glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717] ml-4 w-[126px] flex justify-center align-center"
                      >
                        {loading.Addloading ? (
                          <>
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                          </>
                        ) : (
                          "Add to Tasks"
                        )}
                      </button>

                      <button
                        onClick={()=>generatePDF(setdocloading,plan)}
                        className="glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717] ml-4"
                        disabled={docloading}
                      >
                        Download
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredata.map((daytask) => {
          return <DayTasksCard key={daytask._id} daytask={daytask} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
