import { Schema, model, models } from "mongoose";

const EmailDeadlinesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  lastid: {
    type: String,
  },
  Deadlines: [
    {
      subject: { type: String, required: true },
      description: { type: String, required: true },
      time: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            return /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v); 
          },
          message: props => `${props.value} is not a valid time!`
        },
      },
      date: {
        type: Date,
        required: true,
      }
    }
  ]
});

const EmailDeadlines = models.EmailDeadlines || model('EmailDeadlines', EmailDeadlinesSchema);
export default EmailDeadlines;
