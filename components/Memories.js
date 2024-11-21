import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Memories = () => {
    const [data, setData] = useState([]);
    const { data: session } = useSession();
    const [copiedIndex, setCopiedIndex] = useState(null); 

    useEffect(() => {
        const fetch = async () => {
            try {
                if (session) {
                    const res = await axios.get("/api/get/memories", {
                        headers: {
                            userId: session.user.id,
                        },
                    });
                    setData(res.data.memories);
                }
            } catch (error) {
                console.error("Error fetching memories:", error);
            }
        };

        fetch();
    }, [session]);

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedIndex(index); 
                setTimeout(() => setCopiedIndex(null), 1000);
            })
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    };

    return (
        <div className="flex flex-wrap justify-between p-6 pl-3 rounded-lg gap-4 w-[78%] m-auto">
            {data.map((memory, index) => (
                <div key={index} className="flex-1 min-w-[30%] bg-opacity-60 p-4 glassmorphism text-white transition duration-300 rounded-sm">
                    <div className="flex justify-between items-start">
                        <p className="flex-1">
                            {memory.split(" ").map((word, i) =>
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
                        <button
                            onClick={() => copyToClipboard(memory, index)}
                            className="glassmorphismr p-1"
                        >
                            {copiedIndex === index ? "Copied" : "Copy"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Memories;
