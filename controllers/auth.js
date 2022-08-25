import mongoose from "mongoose";
import User from "../Schema/User.js ";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
// import { request } from "express";
import jwt  from "jsonwebtoken";
//if you are making any request to mangodb your function will be asyn beacuseits goona take a time

//SignUp
export const signup = async (req, res, next) => {
    // console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    //this is how we are going to save this in mongo DB

    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

//SignIn
export const signin = async (req, res, next) => {
  //   console.log(req.body);
  try {
    //we are going to match the passwrd(decrypted) saved in db with the signin paswrd and name
    //here user is a collection name
    //findOne is a mongo db function
    const user = await User.findOne({ name:req.body.name });
    if (!user) return next(createError(404, "user nisgjot found "));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "wrong passwrod "));

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const {password, ...others} = user._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
export const googleAuth = async (req,res,next)=>{
  try {
    const user =await User.findOne({email:req.body.email})
    if(user){ 
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user._doc);
    }else{
      const newUser = new User({
        ...req.body,
        fromGoogle:true
      })
      const savedUser = await newUser.save()
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(savedUser._doc);
    }
  } catch (err) {
    next(err)
  }
}
