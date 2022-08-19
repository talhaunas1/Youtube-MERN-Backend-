//req is what we are getting request form user
//and res is what response we are sending to user
import { createError } from "../error.js";
import User from "../Schema/User.js";

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
          
        } catch (error) {
          next(err);
        }
      } else {
        return next(createError(403, "You can update only your account"));
      }
};

export const deleteUser = async (req, res, next) => {
  //     res.json("succefull")

  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndDeleted(req.params.id);

      res.status(200).json("user has been deleted");
    } catch (error) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account"));
  }
};
export const getUser = async (req, res, next) => {
  //     res.json("succefull")
};
export const subscribe = async (req, res, next) => {
  //     res.json("succefull")
};
export const UnSubscribe = async (req, res, next) => {
  //     res.json("succefull")
};
export const like = async (req, res, next) => {
  //     res.json("succefull")
};
export const dislike = async (req, res, next) => {
  //     res.json("succefull")
};
