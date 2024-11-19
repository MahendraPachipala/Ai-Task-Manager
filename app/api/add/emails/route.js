import FetchEmails from "@utils/FetchEmails";

export const POST = async (req) => {
  const { session } = await req.json();
   
  await FetchEmails(session);

  return new Response(JSON.stringify({ message: "Fetched successfully" }), {
    status: 201,
  });
};
