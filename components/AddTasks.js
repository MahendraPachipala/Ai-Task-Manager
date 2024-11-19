"use client";
import { useState } from "react";
import axios from "axios";
import Toggle from "./Toggle";
import { useSession } from "next-auth/react";

const AddTasks = ({ setIsOpen, setAlert }) => {
  const [showTaskBox, setShowTaskBox] = useState(true);
  const [memory, setMemory] = useState("");
  const [isloading,setIsloading] = useState(false);
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
      if(isloading) return;
      setIsloading((prev)=>{
        return !prev;
      })
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
      if(isloading) return;
      setIsloading((prev)=>{
        return !prev;
      })
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
              showTaskBox ? "glassmorphism ":"text-gray-400"
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
              className="glassmorphism text-white py-2 px-4 my-2 w-[108px] flex items-center  justify-center rounded-md hover:bg-[#171717]"
            >
              {isloading ?
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              :
              <>Save Task</>}
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
              className="absolute bottom-0 left-0 glassmorphism text-white py-2 px-4 my-2 w-[135px]  flex items-center  justify-center rounded-md hover:bg-[#171717]"
            >
              
              {isloading ?
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              :
              <>Save Memory</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTasks;
