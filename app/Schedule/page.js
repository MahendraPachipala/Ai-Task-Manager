"use client";
import { useEffect } from 'react';

const StyledCalendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.styledcalendar.com/assets/parent-window.js';
    script.async = true;
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* <iframe
        src="https://embed.styledcalendar.com/#dPYsH8fjSBVTeIrPxIi1"
        title="Styled Calendar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        className="styled-calendar-container"
        style={{ width: '70%',height:'70%', border: 'none' }}
        data-cy="calendar-embed-iframe"
      ></iframe> */}

      <div className="flex flex-col items-center justify-center h-screen  text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        Page Under Construction
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        We are working hard to bring you new features! Until then, please view your schedules in Google Calendar.
      </p>
      <a
        href="https://calendar.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#500042] text-white py-2 px-4 rounded hover:bg-[#73275c] transition"
      >
        View Google Calendar
      </a>
    </div>
    </div>
  );
};

export default StyledCalendar;
