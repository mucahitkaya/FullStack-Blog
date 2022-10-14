import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

// now we are doing all jobs in seperate files
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/:id", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
