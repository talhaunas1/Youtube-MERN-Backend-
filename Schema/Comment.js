import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    //when we upload any video it gonna have some userID
    userId: {
      type: String,
      required: true,
    //   unique: true,
    },
   //which video we are commenting
    videoId: {
      type: String,
      required: true,
    //   unique: true,
    },
    //text
    desc: {
      type: String,
      required: true,
    //   unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
