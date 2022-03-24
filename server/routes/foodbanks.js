import express from "express";
import {
  createFB,
  getFB,
  getOneFB,
  updateFb,
} from "../controllers/foodbank.js";
const router = express.Router();
//Foodbank get routes
router.get("/getfb", getFB);
router.get("/getonefb/:address", getOneFB);

//Foodbank post routes
router.post("/createfb", createFB);
router.post("/updatefb", updateFb);

export default router;
