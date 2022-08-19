import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  UnSubscribe,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
//in second parameter of router.get we gonna write user controller
// router.get("/test",test)

// update user
//put is used beacuse we are going to update an existing user
router.put("/:id", verifyToken, update);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get user
router.get("/find/:id", getUser);

// subscribe user
router.put("/sub/:id", verifyToken, subscribe);

// UnSubscribe user
router.put("/unsub/:id", verifyToken, UnSubscribe);

// Like user
router.put("/like/:videoId", verifyToken, like);

// dislike user
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
