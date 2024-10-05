import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: `You are ProductivePro, an AI assistant. 
          You will answer questions based solely on provided memories. 
          If a question has no related memories, 
          respond with: "There are no memories related to your question."`,
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

async function GeminiHistory(prompt) {
  try {
    let result = await chat.sendMessage(prompt);
    return result.response.text(); 
  } catch (error) {
    console.error("Error in GeminiHistory:", error);
    return "There was an error processing your request.";
  }
}



export  {GeminiHistory};
