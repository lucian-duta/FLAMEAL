import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
  authUser,
} from "../controllers/user.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/register", createUser);
router.get("/login/:address", loginUser);
router.post("/auth", authUser);
export default router;
