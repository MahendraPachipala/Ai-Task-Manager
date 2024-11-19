import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,  
  },
  tasks: [{
    description: {
      type: String,
      required: true,
    },
    ischecked:{
      type:Boolean,
      default:false,
    },
    start_time: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v);  // Validates time in HH:mm format
        },
        message: props => `${props.value} is not a valid time!`
      }
    },
     end_time: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v);  // Validates time in HH:mm format
        },
        message: props => `${props.value} is not a valid time!`
      }
    },
    date: {
      type: Date,
      required: true,
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,  
  },
});

const Tasks = models.Tasks || model('Tasks', TaskSchema);

export default Tasks;
