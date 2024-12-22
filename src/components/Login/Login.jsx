/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css"; // Make sure you have a relevant CSS file
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate(); // React Router's hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const URL = "https://fitness-buddy-app.onrender.com/login"; // Your API endpoint for login

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const token = response.data.token;

        // Save token to localStorage
        localStorage.setItem("jwtToken", token);
        setSuccessMessage("Login successful!");
        setErrorMessage("");
        console.log("Response data:", response.data);
        navigate("/"); // Redirect to the home page
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Login failed.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Redirect to the SignUp page
  };

  return (
    <>
    <Navbar/>
      <div className="Container">
        <form onSubmit={handleSubmit}>
          <div id="email">
            <h3 className="head">E-Mail</h3>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              className="input"
              type="email"
              title="email"
              name="email"
              placeholder="Enter E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div id="password">
            <h3 className="head">Password</h3>
            <FontAwesomeIcon icon={faLock} />
            <input
              className="input"
              type="password"
              title="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div id="login-Btn">
            <button type="submit">Log In</button>
          </div>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div id="google">
          <button>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ color: "#ffffff", marginRight: "10px" }}
            />
            Log in with Google
          </button>
        </div>
        <div id="facebook">
          <button>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#ffffff", marginRight: "10px" }}
            />
            Log in with Facebook
          </button>
        </div>

        <div id="signup">
          <button onClick={handleSignUpRedirect} className="signup-btn">
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </>
  );
};
