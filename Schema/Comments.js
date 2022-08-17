import mongoose, { mongo } from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    //when we upload any video it gonna have some userID
    userId: {
      type: String,
      required: ture,
    //   unique: true,
    },
   //which video we are commenting
    videoId: {
      type: String,
      required: ture,
    //   unique: true,
    },
    //text
    desc: {
      type: String,
      required: ture,
    //   unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
