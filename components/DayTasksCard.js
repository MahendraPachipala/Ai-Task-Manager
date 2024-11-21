import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomButton from "./buttons/Delete";

const DayTasksCard = ({ daytask }) => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState(daytask.tasks);

  const date = new Date(daytask._id);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const handleCheck = async (e) => {
    const updatedTasks = tasks.map((task) =>
      task._id === e.target.name
        ? { ...task, ischecked: e.target.checked }
        : task
    );
    setTasks(updatedTasks);

    try {
      const response = await axios.put("/api/put/task", {
        userId: session.user.id,
        element_Id: e.target.name,
        ischecked: e.target.checked,
      });
      console.log(response);
    } catch (error) {
      console.log("Error updating task", error);
      setTasks(tasks);
    }
  };

  const handleDelete = async (id) => {
    const updatedTasks = tasks.filter((task) => task._id !== id);
    setTasks(updatedTasks);

    try {
      const response = await axios.delete("/api/delete/task", {
        data: {
          userId: session.user.id,
          element_Id: id,
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error deleting task:", error);
      setTasks(daytask.tasks);
    }
  };

  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  return (
    <div className="w-[100%] flex gap-2 my-5">
      {tasks.length>0 && (<div className="w-[15%] my-1">{formattedDate}</div>)}

      {tasks.length>0 && (

        <div className="glassmorphism w-[76%] space-y-2 p-2">
          {tasks.map((task) => {
            return (
              <div key={task._id} className="glassmorphism flex justify-between p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="appearance-none p-1 w-4 h-4 rounded-full border-2 checked:border-2 border-white checked:bg-[#81BAFD] checked:border"
                    name={task._id}
                    id={task._id}
                    onChange={handleCheck}
                    checked={task.ischecked}
                  />
                  <label
                    className={`${
                      task.ischecked ? "line-through" : ""
                    } select-none`}
                    htmlFor={task._id}
                  >
                    {task.description}
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <p>
                    {task.start_time} - {task.end_time}
                  </p>
                 
                  <div onClick={()=>handleDelete(task._id)}>
                    <CustomButton />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DayTasksCard;
