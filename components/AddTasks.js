"use client";
import { useState } from "react";
import axios from "axios";
import Toggle from "./Toggle";
import { useSession } from "next-auth/react";

const AddTasks = ({ setIsOpen, setAlert }) => {
  const [showTaskBox, setShowTaskBox] = useState(true);
  const [memory, setMemory] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [task, setTask] = useState({
    description: "",
    start_time: "",
    end_time: "",
    date: "",
  });

  const handleonchange = (e) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { data: session } = useSession();

  const handleAddTask = async () => {
    try {
      const res = await axios.post("/api/add/task", {
        userId: session.user.id,
        description: task.description,
        start_time: task.start_time,
        end_time: task.end_time,
        date:task.date,
        session: session,
      });
      if (res) {
        setIsOpen((prev) => !prev);
        setAlert({
          message: res.data.message,
          status: res.status,
        });
      }
    } catch (err) {
      console.log(err);
      setIsOpen((prev) => !prev);
      setAlert({
        message: err.response.data.message,
        status: err.status,
      });
    }
  };

  const handleAddMemory = async () => {
    try {
      const res = await axios.post("/api/add/memory", {
        userId: session.user.id,
        memory: memory,
      });
      if (res) {
        setIsOpen((prev) => !prev);
        setAlert({
          message: res.data.message,
          status: res.status,
        });
      }
    } catch (err) {
      console.log(err);
      setIsOpen((prev) => !prev);
      setAlert({
        message: err.response.data.message,
        status: err.status,
      });
    }
  };

  const toggleBox = () => {
    setShowTaskBox((prev) => !prev);
  };

  return (
    <div className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="border glassmorphism bg-[#242424] rounded-xl p-6 w-[500px] max-w-full">
        <div className="flex items-center mb-4 gap-2">
          <div
            className={`h-10 w-[50%] rounded-[16px] text-center pt-2 cursor-pointer ${
              showTaskBox ? "glassmorphism " : "text-gray-400"
            }`}
            onClick={toggleBox}
          >
            Add Task
          </div>
          <div
            className={`h-10 w-[50%] rounded-[16px] text-center pt-2 cursor-pointer ${
              !showTaskBox ? "glassmorphism text-white" : "text-gray-400"
            }`}
            onClick={toggleBox}
          >
            Add Memory
          </div>
        </div>

        {showTaskBox && (
          <div>
            <textarea
              type="text"
              placeholder="Describe your task, e.g., 'Meeting on Monday, 30 Dec 2021 at 6 PM', or manually enter the date and time below."
              className="w-full px-4 py-2 bg-[#363636] rounded-md h-24 text-white placeholder-gray-400 border-none outline-none mb-2"
              value={task.description}
              name="description"
              onChange={handleonchange}
            />

            <div className="flex justify-end items-center gap-3">
              <p>Manual</p>
              <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>

            <div
              className={`transition-all duration-1000 ease-in-out ${
                isChecked
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="flex justify-between my-4">
                <div>
                  Start time: <br />
                  <input
                    type="time"
                    className="bg-[#363636] placeholder-gray-400 p-2 rounded-md"
                    value={task.start_time}
                    name="start_time"
                    onChange={handleonchange}
                  />
                </div>
                <div>
                  End time: <br />
                  <input
                    type="time"
                    className="bg-[#363636] placeholder-gray-400 p-2 rounded-md"
                    value={task.end_time}
                    onChange={handleonchange}
                    name="end_time"
                  />
                </div>
                <div>
                  Date: <br />
                  <input
                    type="date"
                    className="bg-[#363636] placeholder-gray-400 p-2 rounded-md"
                    value={task.date}
                    onChange={handleonchange}
                    name="date"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleAddTask}
              className="glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717]"
            >
              Save Task
            </button>
          </div>
        )}

        {!showTaskBox && (
          <div className="relative h-[223px]">
            <textarea
              type="text"
              placeholder="Add Memories..."
              className="w-full px-4 py-2 bg-[#363636] rounded-md h-24 text-white placeholder-gray-400 border-none outline-none mb-2"
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
            />
            <button
              onClick={handleAddMemory}
              className="absolute bottom-0 left-0 glassmorphism text-white py-2 px-4 my-2 rounded-md hover:bg-[#171717]"
            >
              Save Memory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTasks;
