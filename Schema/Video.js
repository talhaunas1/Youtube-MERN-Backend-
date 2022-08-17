import mongoose, { mongo } from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    //when we upload any video it gonna have some userID
    userId: {
      type: String,
      required: ture,
    //   unique: true,
    },
    title: {
      type: String,
      required: ture,
    //   unique: true,
    },
    desc: {
      type: String,
      required: ture,
    //   unique: true,
    },
    imgUrl: {
      type: String,
      required: ture,
    //   unique: true,
    },
    videoUrl: {
      type: String,
      required: ture,
    //   unique: true,
    },
    views: {
      type: String,
      default:0,
    //   unique: true,
    },
    tags: {
      type: [String],
      default:[],
    //   unique: true,
    },
    likes: {
      type: [String],
      default:[],
    //   unique: true,
    },
    dislikes: {
      type: [String],
      default:[],
    //   unique: true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
