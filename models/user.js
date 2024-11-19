import {Schema,model,models} from 'mongoose';
const UserSchema = new Schema({
    email:{
        type:String,
        unique:[true,'Email already existe!'],
        required:[true,'Email is required'],
    },

    username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{8,30}$/, 
    }
   ,
    image:{
        type:String
    }

});

const User = models.User || model("User",UserSchema);
export default User;