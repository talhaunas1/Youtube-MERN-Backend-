import mongoose from "mongoose";
import User from "../Schema/User.js ";

//if you are making any request to mangodb your function will be asyn beacuseits goona take a time
// export const signup = async (req,res)=>{
export const signup = (req, res) => {
  console.log(req.body);
  // try {
  //     const newUser = new User(req.body)
  // } catch (error) {

  // }
};
