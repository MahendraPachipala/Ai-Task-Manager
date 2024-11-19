import mongoose from "mongoose";
import { connectToDB } from "@utils/database";
import EmailDeadlines from "@models/EmailDeadlines";

export const POST = async (req) => {
  try {
    await connectToDB();

    const { session } = await req.json();
    console.log(session);
    if (!session?.user?.id) {
      return new Response(JSON.stringify({ message: "Invalid session" }), { status: 400 });
    }

    const userId = session.user.id;
    //const data = await EmailDeadlines.find({ userId });

    const data = await EmailDeadlines.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } }, 
      { $unwind: "$Deadlines" },
      { 
        $group: {
          _id: "$Deadlines.date", 
          Deadlines: { $push: "$Deadlines" } 
        }
      },
      { $sort: { _id: -1 } } 
    ])
    console.log(data);

    return new Response(JSON.stringify({ message: "Data fetched", data }), { status: 200 });
  } catch (error) {
    console.error("Error fetching deadlines:", error);
    return new Response(JSON.stringify({ message: "Error fetching data" }), { status: 500 });
  }
};
