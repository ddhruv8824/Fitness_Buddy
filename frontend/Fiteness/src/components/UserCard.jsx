/** @format */

import React from "react";
import users from "../data/users.json";
import "../Styles/UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const UserCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per slide
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Custom next button
    prevArrow: <CustomPrevArrow />, // Custom previous button
  };

  function handleClick() {
    console.log("wroking");
  }

  return (
    <>
      <div className="main">
      <h1 className="headl">LIVE LEADERBOARD</h1>
      <div className="container-c">
        <Slider {...settings}>
          {users.map((user) => (
            <div key={user.id} className="user-card1" onClick={handleClick}>
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
    </>
  );
};

export default UserCard;
