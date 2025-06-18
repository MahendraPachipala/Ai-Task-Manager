"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = ({ handleOpen }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); 
    }
  }, [status, router]);

  if (status === "loading") {
    return null;
  }

  return (
    <div>
      {session && (
        <>
          {/* Desktop Version (unchanged) */}
          {/* Desktop Version */}
<div className="glassmorphism md:flex hidden fixed right-10 top-1/2 transform -translate-y-1/2 rounded-xl px-3 py-3 flex-col space-y-10 w-12 hover:w-36 transition-all duration-300 ease-in-out z-20 overflow-hidden group">
  <div onClick={handleOpen} className="flex items-center justify-end gap-2 cursor-pointer">
    <span className="hidden group-hover:inline">Add</span>
    <Image src="/asserts/icons/addIcon.svg" width={25} height={20} alt="Add Icon" />
  </div>

  <Link href="/Home" className="flex items-center justify-end gap-2">
    <span className="hidden group-hover:inline">Home</span>
    <Image src="/asserts/icons/homeIcon.svg" width={25} height={20} alt="Home Icon" />
  </Link>

  <Link href="/Tasks" className="flex items-center justify-end gap-2">
    <span className="hidden group-hover:inline">Tasks</span>
    <Image src="/asserts/icons/tasksIcon.svg" width={25} height={20} alt="Tasks Icon" />
  </Link>

  <Link href="/Deadlines" className="flex items-center justify-end gap-2">
    <span className="hidden group-hover:inline">Deadlines</span>
    <Image src="/asserts/icons/deadlineIcon.svg" width={25} height={20} alt="Deadlines Icon" />
  </Link>

  <button onClick={signOut} className="flex items-center justify-end gap-2">
    <span className="hidden group-hover:inline">Logout</span>
    <Image src="/asserts/icons/logoutIcon.svg" width={25} height={20} alt="Logout Icon" />
  </button>
</div>


          {/* Mobile Version */}
          <div className="md:hidden glassmorphism fixed bottom-0 left-0 right-0 overflow-hidden rounded-t-xl px-4 py-3 flex justify-around items-center z-20">
            <div onClick={handleOpen} className="flex flex-col items-center cursor-pointer">
              <Image src="/asserts/icons/addIcon.svg" width={25} height={20} alt="Add Icon" />
              <span className="text-xs mt-1">Add</span>
            </div>

            <Link href="/Home" className="flex flex-col items-center">
              <Image src="/asserts/icons/homeIcon.svg" width={25} height={20} alt="Home Icon" />
              <span className="text-xs mt-1">Home</span>
            </Link>

            <Link href="/Tasks" className="flex flex-col items-center">
              <Image src="/asserts/icons/tasksIcon.svg" width={25} height={20} alt="Tasks Icon" />
              <span className="text-xs mt-1">Tasks</span>
            </Link>

            <Link href="/Deadlines" className="flex flex-col items-center">
              <Image src="/asserts/icons/deadlineIcon.svg" width={25} height={20} alt="Deadlines Icon" />
              <span className="text-xs mt-1">Deadlines</span>
            </Link>

            <button onClick={signOut} className="flex flex-col items-center">
              <Image src="/asserts/icons/logoutIcon.svg" width={25} height={20} alt="Logout Icon" />
              <span className="text-xs mt-1">Logout</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;