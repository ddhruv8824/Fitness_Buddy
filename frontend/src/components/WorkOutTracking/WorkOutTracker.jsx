/** @format */

import React, { useState } from "react";
import "./WorkOutTracker.css";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";

const WorkoutTracker = () => {
  const exerciseTypes = ["running", "weightlifting", "yoga", "cardio"];

  const [workoutData, setWorkoutData] = useState({
    preferredWorkout: "",
    workoutDuration: 0,
  });

  const handleWorkoutChange = (field, value) => {
    setWorkoutData((prev) => ({
      ...prev,
      [field]: field === "workoutDuration" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("jwtToken"); // Get JWT token from localStorage
    console.log(workoutData);

    // Check if token is available
    if (!token) {
      alert("You are not logged in. Please log in first.");
      return;
    }

    // Validate positive duration
    if (workoutData.workoutDuration <= 0) {
      alert("Workout duration must be greater than 0.");
      return;
    }

    try {
      // Send request to backend with Authorization header
      const response = await axios.post(
        "http://localhost:3000/workout/workoutUpdate",
        {
          preferredWorkout: workoutData.preferredWorkout,
          workoutDuration: workoutData.workoutDuration,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Correct Authorization header format
          },
        }
      );

      if (response.status === 200) {
        alert("Workout tracked successfully!");
        setWorkoutData({
          preferredWorkout: "",
          workoutDuration: 0,
        });
      }
    } catch (error) {
      console.error("Error tracking workout:", error);
      alert("Failed to track workout. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container3">
        <h2 id="WT">Today's Workout Tracker</h2>
        <div className="profile-form-container">
          <form className="profile-form">
            <label>Exercise Type:</label>
            <select
              value={workoutData.preferredWorkout}
              onChange={(e) =>
                handleWorkoutChange("preferredWorkout", e.target.value)
              }
              className="profile-form-input"
            >
              <option value="">-- Select Exercise --</option>
              {exerciseTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label>Duration (mins):</label>
            <input
              type="number"
              placeholder="Enter duration"
              value={workoutData.workoutDuration}
              onChange={(e) =>
                handleWorkoutChange("workoutDuration", Number(e.target.value))
              }
              className="profile-form-input"
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="profile-form-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkoutTracker;
