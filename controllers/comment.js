// import User from "../Schema/User.js";
import Comment from "../Schema/Comment.js";
import { createError } from "../error.js";
import Video from "../Schema/Video.js";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(req.params.id);

    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      const updatedVideo = await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("the comment has been deleted");
    } else {
      return next(createError(403, "You can delete only your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getComment = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
