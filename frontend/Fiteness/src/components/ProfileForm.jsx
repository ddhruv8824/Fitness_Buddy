/** @format */

import React, { useState } from "react";
import "../Styles/ProfileForm.css";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    location: "",
    preferredWorkouts: "",
    fitnessGoals: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in profile) {
      formData.append(key, profile[key]);
    }
    console.log("Profile submitted:", profile);
  };

  return (
    <div className="profile-form-container">
      <h2>Create Your Profile</h2>
      <div className="profile-picture-section">
        {preview ? (
          <div className="profile-picture-preview">
            <img src={preview} alt="Profile Preview" />
          </div>
        ) : (
          <div className="profile-picture-placeholder">
            <p>Choose a Profile Picture</p>
          </div>
        )}
        <label className="choose-file-button">
          Choose File
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      </div>
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
            <option value="Yoga">Yoga</option>
            <option value="Running">Running</option>
            <option value="Weightlifting">Weightlifting</option>
          </select>
        </label>

        <label>
          Fitness Goals:
          <textarea
            name="fitnessGoals"
            value={profile.fitnessGoals}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
