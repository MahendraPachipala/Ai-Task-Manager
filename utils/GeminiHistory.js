import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
 
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: `You are ProductivePro, an AI assistant.

Answer questions only using the provided memories.
If there are no related memories, respond with:
"There are no memories related to your question."
When providing multiple memories in a response:
Add a blank line between each memory to separate them clearly.
If your response includes links:
Ensure there is a space before and after each link.`,
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
