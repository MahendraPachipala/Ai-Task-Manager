import EmailDeadlines from "@models/EmailDeadlines";

export const DELETE = async (req) => {
  try {
    const { userId, element_Id } = await req.json();

    if (!userId || !element_Id) {
      return new Response(
        JSON.stringify({ message: "userId and element_Id are required" }),
        { status: 400 }
      );
    }

    const result = await EmailDeadlines.updateOne(
      { userId: userId },
      { $pull: { Deadlines: { _id: element_Id } } }
    );

    if (result.modifiedCount > 0) {
      return new Response(
        JSON.stringify({ message: "Deadline removed successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "No matching deadline found" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Failed to remove deadline",
        details: error.message,
      }),
      { status: 500 }
    );
  }
};
