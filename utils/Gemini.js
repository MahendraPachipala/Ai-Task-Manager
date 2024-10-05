import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



  async function gemini(prompt) {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: `You are an AI assistant called ProductivePro that acts as a Work companion that can do following -can add tasks based on the text given to the respective date and time.
                           -answering questions based on memories of user provided.
                           -can generate personalised day plan
                           -can generate schedule and can add them to google calendar as remainders` }],
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
