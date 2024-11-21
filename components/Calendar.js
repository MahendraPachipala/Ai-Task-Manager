import React, { useState } from "react";

const Calendar = ({currentDate,setCurrentDate,selectedDate,setSelectedDate, className = "" }) => {


  // Function to handle previous month navigation
  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Function to handle next month navigation
  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Generate days for the calendar
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Array for days (including blanks for alignment)
    const days = [];

    // Add blanks for days before the first day of the month
    for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
      days.push("");
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handleDayClick = (day) => {
    if (!day) return;

    const selectedDateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    setSelectedDate(selectedDateObj); // Update selected date state
   
  };

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const calendarDays = generateCalendarDays();

  const isSameDay = (date1, date2) =>
    date1 &&
    date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  return (
    // <div className="flex items-center justify-center py-8 px-4 bg-red-200">
      <div className={`fixed  shadow-lg z-20 ${className}`}>
        <div className="p-2 glassmorphism rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex="0"
              className="focus:outline-none text-base font-bold text-gray-100 "
            >
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </span>
            <div className="flex items-center">
              <button
                onClick={handlePrevMonth}
                aria-label="calendar backward"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24V0H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                onClick={handleNextMonth}
                aria-label="calendar forward"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {daysOfWeek.map((day) => (
                    <th key={day}>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-100">
                          {day}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
                  (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {calendarDays
                        .slice(rowIndex * 7, rowIndex * 7 + 7)
                        .map((day, index) => (
                          <td key={index} className="pt-">
                            <div
                              className={`px-2 py-2 cursor-pointer flex w-full justify-center rounded ${
                                day
                                  ? isSameDay(
                                      new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth(),
                                        day
                                      ),
                                      new Date()
                                    )
                                    ? "bg-red-500 " // Highlight current date
                                    : isSameDay(
                                        new Date(
                                          currentDate.getFullYear(),
                                          currentDate.getMonth(),
                                          day
                                        ),
                                        selectedDate
                                      )
                                    ? "bg-white" // Highlight selected date
                                    : "hover:bg-gray-700"
                                  : ""
                              }`}
                              onClick={() => handleDayClick(day)}
                            >
                              <p
  className={`text-base ${
    day
      ? isSameDay(
          new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
          selectedDate
        )
        ? "text-black" // Black text for the selected date
        : "text-gray-100" // Default text color for other days
      : "text-gray-500" // Text color for empty cells
  }`}
>
  {day}
</p>
                            </div>
                          </td>
                        ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Calendar;