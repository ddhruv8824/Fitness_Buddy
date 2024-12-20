/** @format */

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import "../Styles/navbar.css"; // Style file for Navbar

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Fitness Buddy</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/WorkoutTracking">TrackWorkout</Link>
        </li>
        <li>
          <Link to="/BuddyMatching">BuddyMatching</Link>
        </li>
        <li>
          <Link to="/WeeklyProgressReport">Week Progress Report</Link>
        </li>
      </ul>
    </nav>
  );
};
