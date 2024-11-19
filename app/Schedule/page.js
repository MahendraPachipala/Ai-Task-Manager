"use client";
import { useEffect } from "react";

const StyledCalendar = () => {
  useEffect(() => {
    // Dynamically load external script (for styled calendar)
    const script = document.createElement("script");
    script.src = "https://embed.styledcalendar.com/assets/parent-window.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {/* Uncomment to use StyledCalendar iframe
      <iframe
        src="https://embed.styledcalendar.com/#dPYsH8fjSBVTeIrPxIi1"
        title="Styled Calendar"
        className="styled-calendar-container"
        style={{ width: '70%', height: '70%', border: 'none' }}
        data-cy="calendar-embed-iframe"
      ></iframe> */}

      {/* Google Calendar Embed */}
      <div className="relative w-full" style={{ paddingTop: "56.25%"}}>
        <iframe
          src="https://calendar.google.com/calendar/u/0/embed?src=mahendrapachipala123@gmail.com&ctz=UTC"
          style={{
    border: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "60%",
    height: "60%",
    transform: "translate(-50%, -50%)", // To truly center it
}}

          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default StyledCalendar;
