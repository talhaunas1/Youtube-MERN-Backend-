import express from "express";

import { signup } from "../controllers/auth.js";

//router from expresss
const router = express.Router();

//create a user
router.post("/signup", signup);

//sign in
router.post("/signin");

//google auth
router.post("/google");

export default router;
