//req is what we are getting request form user
//and res is what response we are sending to user
import { createError } from "../error.js";
import User from "../Schema/User.js";

//update
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

//delete user
export const deleteUser = async (req, res, next) => {
  // console.log(req.body);
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

//getuser
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//subscribe
export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedsUser: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("subscription succceful");
  } catch (err) {
    next(err);
  }
};

export const UnSubscribe = async (req, res, next) => {
  try {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribedsUser: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: -1 },
      });
      res.status(200).json("subscription succceful");
    } catch (err) {
      next(err);
    }
  }
   catch (err) {
    next(err);
  }
};

//like
export const like = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
//dislike
export const dislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
