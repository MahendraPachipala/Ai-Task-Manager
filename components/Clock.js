"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const ClockCard = () => {
  const { data: session, status } = useSession();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  // Format date
  const dayOfWeek = time.toLocaleDateString("en-US", { weekday: "long" });
  const month = time.toLocaleDateString("en-US", { month: "long" });
  const day = time.toLocaleDateString("en-US", { day: "numeric" });
  const year = time.getFullYear();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  return (
    <div>
      {session && (
        <div className="glassmorphism fixed bottom-4 left-4 w-[170px] h-[120px]  rounded-[15px] shadow-[rgba(0,0,0,0.7)_5px_10px_50px,rgba(0,0,0,0.7)_-5px_0px_250px] flex flex-col justify-center text-white cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[rgba(0,0,0,1)_5px_10px_50px,rgba(0,0,0,1)_-5px_0px_250px] p-4">
          <p className="text-[36px] font-semibold mt-0  font-custom-sans">
            <span>
              {hours}:{minutes}
            </span>
          </p>
          <p className="text-[18px] mt-0  font-medium font-custom-sans">
            {dayOfWeek}, {month} {dayWithSuffix}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClockCard;
