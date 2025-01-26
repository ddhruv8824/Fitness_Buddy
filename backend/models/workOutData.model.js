/** @format */

import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  preferredWorkout: { type: String, required: true },
  workoutDuration: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true }, // Assumed calculated on submission
  date: { type: Date, default: Date.now },
});

const WorkoutModel = mongoose.model("workOutData", workoutSchema);
export default WorkoutModel