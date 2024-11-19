"use client";
import React, { useState,useEffect } from "react";
import { MdSend } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { useDataContext } from "@utils/Datacontext";
import axios from "axios";

const Home = () => {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const {setfirstQuestion} = useDataContext();
  const{data:session,status} = useSession();
  
  const handleClick = () => {
    setfirstQuestion(question);
    router.push("/Chat");
  };

  

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="relative h-48 w-[750px] bg-transparent text-white">
        <textarea
          className="glassmorphism absolute rounded-xl p-6 h-full w-full placeholder-gray-400 border-none outline-none resize-none"
          placeholder="Ask Your Memories..."
          wrap="soft"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button 
          onClick={handleClick} 
          className="glassmorphismdark p-3 absolute text-xl right-2 bottom-2 text-black">
          <MdSend />
        </button>
      </div>

    </div>
  );
};

export default Home;
