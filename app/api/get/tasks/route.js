import mongoose from "mongoose";
import Tasks from "@models/tasks";
import { connectToDB } from "@utils/database";

export const GET = async(req)=>{
    const userId = req.headers.get("userId");

    try{
        await connectToDB();

        const data = await Tasks.aggregate([
            { $match: { userId: new mongoose.Types.ObjectId(userId) } }, 
            { $unwind: "$tasks" },
            { 
              $group: {
                _id: "$tasks.date", 
                tasks: { $push: "$tasks" } 
              }
            },
            { $sort: { _id: -1 } } 
          ])
          
          
        return new Response(JSON.stringify(data),{status:201});
    }
    catch(error){
        return new Response(JSON.stringify({ message: "Error fetching details", error: error.message }), { status: 500 });
    }
}

