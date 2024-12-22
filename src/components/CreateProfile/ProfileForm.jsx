/** @format */

import React, { useState } from "react";
import "./ProfileForm.css";
import { Navbar } from "../Navbar/Navbar";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    preferredWorkouts: "",
    fitnessGoals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: profile.name,
      city: profile.location,
      preferredWorkout: profile.preferredWorkouts,
      fitnessGoals: profile.fitnessGoals,
    };
    console.log(payload);
    // Retrieve the JWT token (assuming it's stored in localStorage)
    const token = localStorage.getItem("jwtToken");

    fetch("https://fitness-buddy-app.onrender.com/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Add the token here
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Profile submitted successfully!");
        } else {
          console.error("Error submitting profile:", response.status);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <>
    <Navbar/>
    <div className="profile-form-container1">
      
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Workouts:
          <select
            name="preferredWorkouts"
            value={profile.preferredWorkouts}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yoga">yoga</option>
            <option value="running">Running</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="cardio">Cardio</option>
          </select>
        </label>
        <label>
          Fitness Goals
          <select
            name="fitnessGoals"
            value={profile.fitnessGoals}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="weight gain">Weight Gain</option>
            <option value="weight lose">weight Lose</option>
            <option value="bulking">Bulking</option>
            <option value="felxibility">Flexibility</option>
            <option value="muscle buil">Muscle Build</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default ProfileForm;
