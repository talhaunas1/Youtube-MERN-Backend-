import express from "express";
import {addComment, deleteComment, getComment} from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();
//in second parameter of router.get we gonna write user controller
// router.get("/test",test)

router.post("/",verifyToken,addComment)
router.delete("/:id",verifyToken,deleteComment)
router.get("/:videoId",getComment)
// router.post("/",verifyToken,addComment)
export default router;
