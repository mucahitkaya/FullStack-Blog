// for login and register
import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.Router();

// now we are doing all jobs in seperate files
// these all are post methods
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
