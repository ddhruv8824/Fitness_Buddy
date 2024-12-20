/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import users from "../data/users.json";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props; // Corrected onClick
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick} // Corrected here
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props; // Corrected onClick
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
      }}
      onClick={onClick} // Corrected here
    />
  );
};

const BuddyMatching = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="main">
      <h2>Buddy Matching with Same Goals</h2>
      <div className="container-c">
        <Slider {...settings}>
          {users.map((user) => (
            <div key={user.id} className="user-card1">
              <div className="user-card-img">
                <img src={user.image} alt={user.name} />
              </div>
              <div className="user-card-content">
                <h2 className="user-card-name">{user.name}</h2>
                <h3 className="user-card-gender">{user.gender}</h3>
                <p className="user-card-location">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="contactStyle"
                  />
                  {user.location}
                </p>
                <p className="user-card-goal">Goal: {user.goal}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BuddyMatching;
