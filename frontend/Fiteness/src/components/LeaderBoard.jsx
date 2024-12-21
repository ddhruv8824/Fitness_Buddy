/** @format */

import React from "react";
import UserCard from "./UserCard";
import "../Styles/leaderBoard.css"
const LeaderBoard = () => {
  return (
    <div>
      <h1 className="report-title1">LIVE LEADERBOARD</h1>
      <UserCard />
    </div>
  );
};

export default LeaderBoard;
