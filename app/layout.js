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
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [isopen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    status: 500
  });

  const pathname = usePathname();
  console.log(pathname)
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Alert alert={alert} setAlert={setAlert} Time={3000} />
        
        {/* Background Pattern */}
        <div
          className="fixed inset-0 h-full w-full z-[-1]"
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
            {/* Clock positioned differently based on screen size */}
            <div className="fixed top-4 right-4 lg:right-8 xl:right-12 z-20">
              <ClockCard />
            </div>
            
            {/* Modal overlay */}
            {isopen && (
              <div
                onClick={handleOpen}
                className="fixed  inset-0 w-full h-full backdrop-blur-lg z-20"
              ></div>
            )}
            
            {/* Add Tasks modal with responsive sizing */}
            {isopen && <AddTasks setIsOpen={setIsOpen} setAlert={setAlert}/>}
            
            {pathname !== "/privacy_policy" && pathname !== "/terms" && <Navbar handleOpen={handleOpen} />}

            {/* Main content area with responsive padding */}
            <main className="flex-1 pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-12">
              {children}
            </main>
          </DataProvider>
        </Provider>
      </body>
    </html>
  );
}