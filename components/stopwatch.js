import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react"; 

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const { data: session, status } = useSession();

  // Effect to update the time every second
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Updates every 10ms
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Format the time
  const formatTime = (time) => {
    const milliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  // Start or stop the timer
  const toggleStartStop = () => {
    setIsActive(!isActive);
  };

  // Reset the timer
  const resetTime = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
    {session && (
      <div className="glassmorphism fixed bottom-36 left-4 w-[170px] h-[120px]  rounded-[15px] shadow-[rgba(0,0,0,0.7)_5px_10px_50px,rgba(0,0,0,0.7)_-5px_0px_250px] flex flex-col justify-center text-white cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[rgba(0,0,0,1)_5px_10px_50px,rgba(0,0,0,1)_-5px_0px_250px] p-4">
    
      <div className="text-3xl ">
          {formatTime(time)}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={toggleStartStop}
            className={`px-2 py-1 rounded-md font-semibold transition ${
              isActive
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-gray-700 hover:bg-gray-900"
            }`}
          >
            {isActive ? "Stop" : "Start"}
          </button>
          <button
            onClick={resetTime}
            className="px-2 py-1 glassmorphismr hover:bg-gray-600 text-white rounded-md font-semibold transition ml-4"
            disabled={time === 0}
          >
            Reset
          </button>
        </div>
      </div>
    )}
    </div>
  );
}
