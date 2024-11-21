import { connectToDB } from "@utils/database";
import Tasks from "@models/tasks";
import gemini from "@utils/Gemini";

export const POST = async (req) => {
  const { userId, request } = await req.json();

  if (request.trim() === "") {
    return new Response(JSON.stringify({ message: "prompt cant be empty"}),{status:500});
  }


  //prompt
  let prompt = `
  generate a detailed day plan for the task described in the <desc> tag.
  
  Format the response as:
  task description 1, start time (hh:mm), end time (hh:mm)
  task description 2, start time (hh:mm), end time (hh:mm)
  task description 3, start time (hh:mm), end time (hh:mm)
  ...

  dont give anything else.

  Guidelines:
  - Analyze the task requirements in the <desc> tag to create a structured and realistic schedule.
  - Allocate realistic time slots for each task, based on complexity and expected duration.
  - Prioritize tasks by importance or urgency where applicable.
  - Include breaks (e.g., 5-15 minute short breaks or longer breaks for meals).
  - Ensure adequate buffer time between tasks to account for any potential overruns or delays.
  - Start the day with less intensive tasks and build up to more complex ones, if appropriate.
  - Consider the total hours in a day and avoid over-scheduling.
  - Make sure to include personal time, such as lunch, exercise, or any other necessary activities.
  - Try to keep the schedule flexible, allowing for adjustments as needed.
  - Don't use brackets in description.
`;

prompt+=("<desc>"+request+"<desc>");


  try {
    await connectToDB();
    const res = await gemini(prompt);

    const data = res.split("\n");
    

    console.log(data);
    //send plan to user
    return new Response(JSON.stringify({ plan: data }), {status: 200});

  } catch (err) {
    return new Response(JSON.stringify({ message: "Failed to get" }), {
      status: 500,
    });
  }
};
