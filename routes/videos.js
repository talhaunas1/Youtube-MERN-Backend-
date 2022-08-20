import express from "express";
// import { addVideo, addView, random, sub, trend } from "../controllers/video.js";
// import { verifyToken } from "../verifyToken.js";
import { addVideo, addView, getVideo, random, sub, trend } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();
//in second parameter of router.get we gonna write user controller
// router.get("/test",test)

//create a video
// router.put('/:id',  verifyToken,addVideo)
// router.post('/',  verifyToken,addVideo)
// router.delete('/:id',  verifyToken,addVideo)
// router.get('/find/:id',  addVideo)
// router.put('/view/:id',  addView)
// router.put('/trend',  trend)
// router.put('/random',  random)
// router.put('/sub', verifyToken ,sub)
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
// router.get("/tags", getByTag)
// router.get("/search", search)
export default router;
