import { connectToDB } from '@utils/database';
import Tasks from '@models/tasks';

export const PUT = async (req) =>{
    const {userId,element_Id,ischecked} = await req.json();
    
    try{
        await connectToDB();


        const result = await Tasks.updateOne(
            { userId: userId, "tasks._id": element_Id },
            { $set: { "tasks.$.ischecked": ischecked } }
        );


        if(result.modifiedCount>0){
           return new Response(JSON.stringify({message:"checked"}),{status:201});
        }
        else{
            return new Response(JSON.stringify({message:"no element found"}),{status:404});
        }
    }
    catch(error){
        return new Response(JSON.stringify({error:"failed to update task",details:error}),{status:500});
    }
    
}