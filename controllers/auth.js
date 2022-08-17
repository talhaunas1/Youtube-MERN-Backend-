import mongoose from "mongoose";
import User from "../Schema/User.js ";
import bcrypt from "bcryptjs";

//if you are making any request to mangodb your function will be asyn beacuseits goona take a time

export const signup = async (req, res, next) => {
  //   console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    //this is how we are goning to save this in mongo DB

    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};
