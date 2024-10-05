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
        <div className="glassmorphism fixed right-10 top-1/2 transform -translate-y-1/2 overflow-hidden rounded-xl px-3 py-3 flex flex-col space-y-10 w-12 transition-all duration-300 ease-in-out hover:w-36 z-20">
          <div onClick={handleOpen} className="flex justify-end gap-4 cursor-pointer">
            <span>Add</span>
            <Image src="/asserts/icons/addIcon.svg" width={25} height={20} alt="Add Icon" />
          </div>

          <Link href="/Home" className="flex justify-end gap-4">
            <span>Home</span>
            <Image src="/asserts/icons/homeIcon.svg" width={25} height={20} alt="Home Icon" />
          </Link>

          <Link href="/Tasks" className="flex justify-end gap-4">
            <span>Tasks</span>
            <Image src="/asserts/icons/tasksIcon.svg" width={25} height={20} alt="Tasks Icon" />
          </Link>

          <Link href="/Schedule" className="flex justify-end gap-4">
            <span>Schedule</span>
            <Image src="/asserts/icons/calenderIcon.svg" width={25} height={20} alt="Schedule Icon" />
          </Link>

          <Link href="/Deadlines" className="flex justify-end gap-4">
            <span>Deadlines</span>
            <Image src="/asserts/icons/deadlineIcon.svg" width={25} height={20} alt="Deadlines Icon" />
          </Link>

          <button onClick={signOut} className="flex justify-end gap-4">
            <span>Logout</span>
            <Image src="/asserts/icons/logoutIcon.svg" width={25} height={20} alt="Logout Icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
