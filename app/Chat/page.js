"use client";
import { useState, useEffect, useRef } from "react";
import { GeminiHistory } from "@utils/GeminiHistory.js";
import { useDataContext } from "@utils/Datacontext";
import { useSession } from "next-auth/react";
import axios from "axios";
import { MdSend } from "react-icons/md";
import Memories from "@components/Memories";

const Chat = () => {
  const { data: session } = useSession();
  const { firstquestion } = useDataContext(null);
  const [isChat,setischat] = useState(true);
  let firstprompt = "";
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);
  const handleKeydown = (event) =>{
    if(event.key==='Enter'){
      handleClick();
    }
  }
  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const fetchMemories = async () => {
      if (session) {
        try {
          const req = await axios.get("/api/get/memories", {
            headers: {
              userId: session.user.id,
            },
          });
          if (req) {
            const memoriesList = req.data.memories.join(",");
            firstprompt = `Memories (wrapped in <>) and separated by commas: <${memoriesList}>`;
          
            await GeminiHistory(firstprompt);

            if (firstquestion !== null) {
              const output = GeminiHistory(firstquestion);
              setHistory([]);
              setHistory((prevHistory) => [
                ...prevHistory,
                { question: firstquestion, answer: output },
              ]);
            }
          }
        } catch (error) {
          console.error("Error fetching memories:", error);
        }
      }
    };
    fetchMemories();
  }, [session]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleClick = async () => {
    if (!data.trim()) return;

    const output = await GeminiHistory(data);
    setHistory((prevHistory) => [
      ...prevHistory,
      { question: data, answer: output },
    ]);
    setData("");
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; 
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`; 
    }
  };

  return (
    <div>
    <button className="glassmorphism fixed right-10 top-5 p-4" onClick={()=>{setischat(!isChat)}}>{isChat?"View all Memories":"Go to Chat"}</button>
    {isChat ?
    <div className="flex justify-center items-center">
      <div className="w-[70%] mb-20 ">
        <div
          ref={chatContainerRef}
          className="overflow-y-auto hide-scrollbar"
          style={{ maxHeight: "100vh" }}
        >
          {history.map((entry, index) => (
            <div key={index} className="my-4 space-y-4">
              <div className="flex justify-end">
                <p className="glassmorphism p-4 max-w-2xl">{entry.question}</p>
              </div>
              <div className="flex justify-start">
                <p className="glassmorphismdark p-4 w-full">
                  <strong>ProductivePro:</strong>{entry.answer.split(" ").map((word, i) =>
                                word.startsWith("http") || word.startsWith("www") ? (
                                    <a
                                        key={i}
                                        href={word}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 p-1 hover:text-blue-600 rounded inline-block"
                                    >
                                        {word}
                                    </a>
                                ) : (
                                    <span key={i}>{word} </span>
                                )
                            )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[70%] fixed bottom-3 glassmorphism  my-2 flex items-center">
          <textarea
            ref={textareaRef}
            className="w-full bg-transparent outline-none resize-none overflow-y-auto hide-scrollbar"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
              handleInput();
            }}
            rows={1}
            style={{ maxHeight: "150px" }} 
            onKeyDown={handleKeydown}
          />
          <button onClick={handleClick} className="text-3xl glassmorphismdark h-12 w-16"><MdSend className="w-16"/></button>
        </div>
      </div>
    </div>
  :<Memories userId={session.user.id}/>
    }
    </div>      
  );
};

export default Chat;
