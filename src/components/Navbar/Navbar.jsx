/** @format */
import logoimg from "../../assets/images/logo.png"
import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import "./Navbar.css"; // Style file for Navbar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faRunning,
  faUsers,
  faChartLine,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }


  return (
    <nav className="navbar">
      <div className="logo" onClick={handleClick}>
            <img src={logoimg} alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FontAwesomeIcon
              icon={faSignInAlt}
              style={{ marginRight: "8px" }}
            />
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "8px" }} />
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/WorkoutTracking">
            <FontAwesomeIcon icon={faRunning} style={{ marginRight: "8px" }} />
            Track Workout
          </Link>
        </li>
        <li>
          <Link to="/BuddyMatching">
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px" }} />
            Buddy Matching
          </Link>
        </li>
        <li>
          <Link to="/WeeklyProgressReport">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ marginRight: "8px" }}
            />
            Week Progress Report
          </Link>
        </li>
        <li>
          <Link to="/CreateProfile">
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ marginRight: "8px" }}
            />
            Create Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
