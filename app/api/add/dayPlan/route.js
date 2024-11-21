import { connectToDB } from "@utils/database";
import Tasks from "@models/tasks";

export const POST = async (req) => {
  const { userId, tasksArray } = await req.json();

  const currdate = new Date();
  const formattedDate = currdate.toISOString().split("T")[0];

  try {
    await connectToDB();

    let tasks = [];

    for (let i = 0; i < tasksArray.length - 1; i++) {
      let element = tasksArray[i];
      if(element.trim()!=""){
      const [task, start_time, end_time] = element
        .split(", ")
        .map((item) => item.trim());
        console.log(task);
        
      tasks.push({
        description: task,
        ischecked: false,
        start_time: start_time,
        end_time: end_time,
        date: formattedDate,
      });
    }
  }


    const res = await Tasks.findOne({ userId }).then((doc) => {
      if (doc) {
        tasks.forEach((obj)=>{
          doc.tasks.push(obj);
        })
        
        doc.save();
      } else {
        const firstTask = new Tasks({
          userId: userId,
          tasks: tasks,
        });

        firstTask.save();
      }
    });
    console.log("Hello");

    return new Response(JSON.stringify({ message: "successfully added" }), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
};
