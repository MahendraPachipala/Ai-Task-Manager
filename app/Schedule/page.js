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
      <iframe
        src="https://embed.styledcalendar.com/#dPYsH8fjSBVTeIrPxIi1"
        title="Styled Calendar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        className="styled-calendar-container"
        style={{ width: '70%',height:'70%', border: 'none' }}
        data-cy="calendar-embed-iframe"
      ></iframe>
    </div>
  );
};

export default StyledCalendar;
