"use client";
import { React, useEffect, useState } from "react";
import DayTasksCard from "@components/DayTasksCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Tasks = () => {
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [isOpen, setIsopen] = useState(false);

  const [prompt, setPrompt] = useState("dbms interview preparation");
  const [plan, setPlan] = useState([]);

  const router = useRouter();


  useEffect(() => {
    if (!session) return;

    console.log(session)
    
    const fetchTasks = async () => {
      const res = await axios("/api/get/tasks", {
        headers: {
          userId: session.user.id,
          "Content-Type": "application/json",
        },
      });
      setData(res.data);
    };

    

    fetchTasks();
  }, [session]);

  const getDayPlan = async () => {
    const res = await axios.post("/api/get/dayPlan", {
      userId: session.user.id,
      request: prompt,
    });
    setPlan(res.data.plan);
  };

  const AddDayPlan = async () => {
    try {
      await axios.post("/api/add/dayPlan", {
        userId: session.user.id,
        tasksArray: plan,
      });
      router.push("/Tasks");
      setIsopen(false);
      location.reload();
    } catch (error) {
      console.error("Error adding day plan:", error);
      
    }
  };
  

  const handleOpen = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <div>
      {/* blur div */}
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
                  placeholder="Add Memories..."
                  className="w-full px-4 py-2 bg-[#363636] rounded-md h-24 text-white placeholder-gray-400 border-none outline-none mb-2"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />

                {plan.map((p, index) => {
                  return <p key={index}>{p}</p>;
                })}

                <button
                  onClick={getDayPlan}
                  className="glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717]"
                >
                  Generate
                </button>
                {plan.length != 0 && (
                  <button
                    onClick={AddDayPlan}
                    className="glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717]"
                  >
                    Add to Tasks
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {data.map((daytask) => {
          return <DayTasksCard key={daytask._id} daytask={daytask} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
