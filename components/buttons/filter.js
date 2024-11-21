import React from 'react'
import Image from "next/image";

const Filter = ({filtersOpen,setFiltersOpen,selectedDate,handleCalendarOpen,setSelectedDate}) => {
  return (
    <div className="relative">
  <div
    className={`glassmorphism fixed left-10 top-5 flex flex-col space-y-1 p-1 overflow-hidden 
      transition-all duration-500 ease-in-out ${
        filtersOpen ? "max-w-[170px] max-h-[200px] opacity-100" : "max-w-[40px] max-h-[40px] opacity-0"
      }`}
  >
    {/* Filters Content */}
    <div
      className={`transition-opacity duration-300 ${
        filtersOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center space-x-2">
        {/* Close Filters Button */}
        <button
          className="bg-gray-500 rounded-lg w-6 h-6"
          onClick={() => setFiltersOpen(false)}
        >
          X
        </button>
        <p className="text-lg">Filters</p>
      </div>

      {/* Calendar Button */}
      <button
        className="glassmorphism w-[160px] p-4 mt-2"
        onClick={handleCalendarOpen}
      >
        Calendar
      </button>

      {/* All Button */}
      <button
        className={`${
          selectedDate ? "glassmorphism" : "glassmorphismdark"
        } w-[160px] p-4 mt-2`}
        onClick={() => setSelectedDate(null)}
      >
        All
      </button>
    </div>
  </div>

  {/* Filter Icon (Always Visible When Collapsed) */}
  <div
    className={`glassmorphism fixed left-10 top-5 p-[10px] transition-all duration-300 ease-in-out ${
      filtersOpen ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
    onClick={() => setFiltersOpen(true)}
  >
    <Image src="/asserts/icons/filterIcon.svg" width={30} height={30} />
  </div>
</div>
  )
}

export default Filter;
