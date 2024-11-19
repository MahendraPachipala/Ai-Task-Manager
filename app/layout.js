"use client";
import Provider from "@/components/Provider";
import "@app/globals.css";
import Navbar from "@components/Navbar";
import { useState } from "react";
import AddTasks from "@components/AddTasks";
import Alert from "@components/Alert";
import { DataProvider } from "@utils/Datacontext";
import ClockCard from "@components/Clock";
import Stopwatch from "@components/stopwatch";

export default function RootLayout({ children }) {
  const [isopen, setIsOpen] = useState(false);
  const [alert,setAlert] = useState({
    message:"",
    status: 500
  });



  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        
        <Alert alert={alert} setAlert={setAlert} Time={3000}/>
        {/* backgroundImage */}
        <div
          className="absolute inset-0 h-full w-full z-[-1]"
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236b6b6b' fill-opacity='0.2'%3E%3Ccircle cx='20' cy='15' r='2'/%3E%3Ccircle cx='70' cy='25' r='3'/%3E%3Ccircle cx='40' cy='45' r='1.5'/%3E%3Ccircle cx='90' cy='55' r='2.5'/%3E%3Ccircle cx='10' cy='80' r='3'/%3E%3Ccircle cx='60' cy='65' r='1'/%3E%3Ccircle cx='30' cy='90' r='2'/%3E%3Ccircle cx='80' cy='10' r='2'/%3E%3Ccircle cx='50' cy='70' r='2.5'/%3E%3Ccircle cx='15' cy='35' r='1.8'/%3E%3Ccircle cx='85' cy='90' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
            maskImage: "radial-gradient(circle, white 10%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(circle, white 10%, transparent 90%)",
          }}
        ></div>

        <Provider>
        <DataProvider>
        <ClockCard/>
        <Stopwatch />
         {/* add remainder blur*/}
        {isopen && (
          <div
            onClick={handleOpen}
            className="fixed w-full  backdrop-blur-lg  h-screen z-10"
          ></div>
        )}
        {isopen && <AddTasks setIsOpen={setIsOpen} setAlert={setAlert}/>}
          <Navbar handleOpen={handleOpen} />
          
          {children}
          </DataProvider>
        </Provider>

        
      </body>
    </html>
  );
}
