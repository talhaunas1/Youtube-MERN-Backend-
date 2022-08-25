import express from "express";

import { signup, signin, googleAuth } from "../controllers/auth.js";
// import {  } from "../controllers/auth.js";

//router from expresss
const router = express.Router();

//create a user
router.post("/signup", signup);

//sign in
router.post("/signin", signin);

//google auth
router.post("/google",googleAuth);

export default router;
