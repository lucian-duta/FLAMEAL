import express from "express";
import {
  findUser,
  createUser,
  loginUser,
  authUser,
  updateInventory,
  getInventory,
} from "../controllers/user.js";
const router = express.Router();

//User get request routes
router.get("/finduser/:address", findUser);
router.get("/login/:address", loginUser);
router.get("/getinventory/:address", getInventory);
//User post request routes
router.post("/register", createUser);
router.post("/auth", authUser);
router.post("/updateinventory", updateInventory);

export default router;
