import { connectToDB } from "@utils/database";
import Memories from "@models/memories";

export const POST = async (req) => {
    const { userId, memory } = await req.json();

    if(memory==""){
        return new Response(JSON.stringify({message:"Memory cannot be empty"}),{status:500});
    }
    try {
        await connectToDB();

        return Memories.findOne({ userId })
            .then((doc) => {
                if (doc) {
                    doc.memories.push(memory);
                    return doc.save().then(() => {
                        return new Response(JSON.stringify({ message: "Memory added successfully" }), { status: 201 });
                    });
                } else {
                    const firstMemory = new Memories({
                        userId,
                        memories: [memory],
                    });

                    return firstMemory.save().then(() => {
                        return new Response(JSON.stringify({ message: "First memory added successfully" }), { status: 201 });
                    });
                }
            })
            .catch((err) => {
                console.error(err);
                return new Response(JSON.stringify({ message: "Failed to add memory", error: err.message }), { status: 500 });
            });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ message: "Failed to connect to database", error: err.message }), { status: 500 });
    }
};
