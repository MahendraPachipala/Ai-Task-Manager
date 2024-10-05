import { connectToDB } from "@utils/database";
import Tasks from "@models/tasks";
import gemini from "@utils/Gemini";
import AddCalenderEvent from "@utils/GoogleCalendar"

export const POST = async (req) => {
  const { userId, description,start_time,end_time,date,session} = await req.json();
  //const { userId, description } = await req.json();
  const data = "description:"+description+" start_time:"+start_time+" end_time:"+end_time+" date:"+date;

  //date
  const currdate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = new Intl.DateTimeFormat("en-IN", options).format(currdate);
  

  if (!description || description.trim() === "") {
    return new Response(JSON.stringify({ message: "Task cannot be empty" }), {
      status: 500,
    });
  }


  //prompt
  let prompt = `
    The current date is ${dateString}. Based on this, extract the task details from the text provided in the <desc> tag. For each task, identify and extract the following:

    Task description
    Start time (in hh:mm format)
    End time (in hh:mm format)
    Date (in yyyy-mm-dd format)
    
    Guidelines:

    If specific dates or times are mentioned, use those directly.
    If vague references like "upcoming" or "next Monday" are present, calculate the correct date based on the current date (${dateString}).
    If no specific date or time is provided, assume start and end time based on task(analyze it carefully), and use today's date.

    Response Format:
    Task, Start Time (hh:mm), End Time (hh:mm), Date (yyyy-mm-dd)

    dont give anything else.
    `;

  try {
    await connectToDB();
    prompt += "<desc>" + data + "<desc>";

    const res = await gemini(prompt);

    //extract task,start time,end time,date
    const [res_task, res_start_time, res_end_time, res_date] = res
      .split(", ")
      .map((item) => item.trim());



    return Tasks.findOne({ userId })
      .then((doc) => {
        if (doc) {
          doc.tasks.push({
            description: res_task,
            start_time: res_start_time,
            end_time: res_end_time,
            date: res_date,
          });
          AddCalenderEvent(res_task,res_start_time,res_end_time,res_date,session);
          return doc.save().then(() => {
            return new Response(
              JSON.stringify({ message: "Task added successfully" }),
              { status: 201 }
            );
          });
        } else {
          const firstTask = new Tasks({
            userId: userId,
            tasks: [
              {
                description: res_task,
                start_time: res_start_time,
                end_time: res_end_time,
                date: res_date,
              },
            ],
          });

          AddCalenderEvent(description,start_time,end_time,date,session);

          return firstTask.save().then(() => {
            return new Response(
              JSON.stringify({ message: "First task added successfully" }),
              { status: 201 }
            );
          });
        }
      })
      .catch((err) => {
        console.error(err);
        return new Response(
          JSON.stringify({
            message: "Failed to add Task",
            error: err.message,
          }),
          { status: 500 }
        );
      });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "Failed to connect to database",
        error: err.message,
      }),
      { status: 500 }
    );
  }
};
