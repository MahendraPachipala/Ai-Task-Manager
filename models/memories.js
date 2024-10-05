import {Schema, model,models} from "mongoose";

const memoriesschema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    memories:[{type:String}]
})

const Memories = models.Memories || model('Memories',memoriesschema);

export default Memories;