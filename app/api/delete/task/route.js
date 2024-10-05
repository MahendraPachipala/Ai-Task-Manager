import Tasks from "@models/tasks";

export const DELETE = async (req) => {
    try {
      const { userId, element_Id } = await req.json(); 
      console.log(userId);
      console.log(element_Id);
      const result = await Tasks.updateOne(
        { userId: userId },
        { $pull: { tasks: { _id: element_Id } } } 
      );
  
      if (result.modifiedCount > 0) {
        return new Response(JSON.stringify({ message: "Removed successfully" }), { status: 201 });
      } else {
        return new Response(JSON.stringify({ message: "No matching element found" }), { status: 404 });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to remove element", details: error.message }), { status: 500 });
    }
  };