/** @format */

import express from "express";
import mongoose, { Types } from "mongoose";
import WorkoutModel from "../models/workOutData.model.js";
import authenticateToken from "../middleware/authenticateToken.js";

const Workoutrouter = express.Router();

// Calorie burn rates for different activities
const calorieBurnRates = {
  running: 10,
  cycling: 8,
  swimming: 12,
  walking: 4,
};

// POST route to store workout data
Workoutrouter.post("/workoutUpdate", authenticateToken, async (req, res) => {
  const { preferredWorkout, workoutDuration } = req.body;
  const userId = req.user.id;

  try {
    // Calculate calories burned based on the workout type and duration
    const caloriesBurned = calorieBurnRates[preferredWorkout]
      ? calorieBurnRates[preferredWorkout] * workoutDuration
      : 0;

    // Create a new workout document
    const newWorkout = new WorkoutModel({
      userId,
      preferredWorkout,
      workoutDuration,
      caloriesBurned,
    });

    // Save the workout document to the database
    await newWorkout.save();
    res.status(200).json({ message: "Workout tracked successfully!" });
  } catch (error) {
    console.error("Error tracking workout:", error);
    res.status(500).json({ message: "Failed to track workout. Please try again." });
  }
});

// GET route to fetch weekly progress data
Workoutrouter.get("/weekProgress", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    // Validate the userId to ensure it's a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Get the date of 7 days ago
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Aggregate the data for the past week
    const workouts = await WorkoutModel.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId), // Use new to create an ObjectId instance
          date: { $gte: oneWeekAgo }, // Match workouts within the past 7 days
        },
      },
      {
        $group: {
          _id: null,
          totalCaloriesBurned: { $sum: "$caloriesBurned" }, // Sum of calories burned
          totalDuration: { $sum: "$workoutDuration" }, // Sum of workout durations
        },
      },
    ]);

    // If workouts exist, return the data, else send empty values
    if (workouts.length > 0) {
      res.status(200).json({ data: workouts[0] });
    } else {
      res
        .status(200)
        .json({ data: { totalCaloriesBurned: 0, totalDuration: 0 } });
    }
  } catch (error) {
    console.error("Error fetching weekly progress:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default Workoutrouter;
