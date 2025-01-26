/** @format */

import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import Workoutrouter from "./routes/WorkOut.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // This loads variables from .env into process.env

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);
app.use("/workout", Workoutrouter);
app.listen(PORT, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/FitnessBuddyApp");
    console.log("Server is running ,mongo connected");
  } catch (err) {
    console.error("error", err);
  }
});
