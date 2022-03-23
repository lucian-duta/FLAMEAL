import express from "express";
import { createFB, getFB } from "../controllers/foodbank.js";

const router = express.Router();

//Foodbank get routes
router.get("/getfb", getFB);
//Foodbank post routes
router.post("/createfb", createFB);

export default router;
