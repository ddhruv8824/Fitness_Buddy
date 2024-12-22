/** @format */

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./BuddyMatching.css";
import { Navbar } from "../Navbar/Navbar";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const BuddyMatching = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBuddies = async () => {
    try {
      const token = localStorage.getItem("jwtToken"); // Assuming you're using JWT for auth
      console.log(token);

      if (!token) {
        alert("You are not logged in. Please log in first.");
        return;
      }

      const response = await axios.get(
        "https://fitness-buddy-app.onrender.com/getBuddies",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUsers(response.data); // Set the fetched data
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching buddies:", error);
      alert("Failed to fetch buddy data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBuddies();
    //console.loh
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <h2>Buddy Matching with Same Goals</h2>
        <div className="container-c">
          <Slider {...settings}>
            {users.map((user) => (
              <div key={user.userId} className="user-card1">
                <div className="user-card-img">
                  {/* Add placeholder image if no image URL is provided */}
                  <img
                    src={user.image || "https://via.placeholder.com/150"}
                    alt={user.name || "Buddy"}
                  />
                </div>
                <div className="user-card-content">
                  <h2 className="user-card-name">{user.name}</h2>
                  <p className="user-card-location">
                    <FontAwesomeIcon
                      icon={faLocationArrow}
                      className="contactStyle"
                    />
                    {user.city || "Location not provided"}
                  </p>
                  <p className="user-card-goal">
                    Fitness Goal: {user.fitnessGoals}
                  </p>
                  <p className="user-card-workout">
                    Preferred Workout: {user.preferredWorkout}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BuddyMatching;
