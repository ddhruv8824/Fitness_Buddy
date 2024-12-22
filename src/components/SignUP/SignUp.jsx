/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./signup.css";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const URL = "https://fitness-buddy-app.onrender.com/signin";

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
        setSuccessMessage("Signup successful!");
        setErrorMessage("");
        console.log("Response data:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Signup failed.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <>
    <Navbar/>
      <div className="Container">
        <Link to="/login">Login</Link>
        <form onSubmit={handleSubmit}>
          <div id="name">
            <h3 className="head">Name</h3>
            <FontAwesomeIcon icon={faUser} id="icon" />
            <input
              className="input"
              type="text"
              title="name"
              name="username"
              placeholder="Enter User Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <div id="signup-Btn">
            <button type="submit">Sign Up</button>
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
            Sign up with Google
          </button>
        </div>
        <div id="facebook">
          <button>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ color: "#ffffff", marginRight: "10px" }}
            />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </>
  );
};
