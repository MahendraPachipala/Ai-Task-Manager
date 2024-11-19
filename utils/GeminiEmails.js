import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  async function gemini(prompt) {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text:`You are an AI assistant designed to convert email content into tasks. 
                         You will receive emails that contain descriptions and, possibly, deadlines or dates (e.g., 'Apply before,' 'Meeting on,' specific times, etc.). 
                         Your task is to extract and summarize these details into a structured format, using the following response format:
                         -The response summary must me single sentence and must include all the information.
                         -
                         Response Format:
                          Task,Deadline(hh:mm),Date(yyyy-mm-dd) eg:HPE R&D selection process, 00:00, 2024-11-15 
                         Dont respond with sentences like this {Please provide me with the email content you want me to convert into a task}.
                         If no dates are mentioned in the email or if the email doesnot contain any text or content related to the tasks, respond with only the word false (exactly five letters) as the output, without any additional information.`}],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    });
   
      let result = await chat.sendMessage(prompt);
      chat.history = [];
      return result.response.text();
  }


export default gemini;
