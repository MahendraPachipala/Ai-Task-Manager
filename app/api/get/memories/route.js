import { connectToDB } from "@utils/database";
import Memories from "@models/memories";

export const GET = async (req) => {
    const userId = req.headers.get("userId");

    console.log(userId);

    try {
        await connectToDB();
        
        const data = await Memories.findOne({userId});
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching details", error: error.message }), { status: 500 });
    }
};
