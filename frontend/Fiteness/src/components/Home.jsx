/** @format */

import React from "react";
import { Navbar } from "./Navbar";
import UserCard from "./UserCard";
import Footer from "./Footer";
import WeeklyProgressReport from "./WeeklyProgressReport";
import ProfileForm from "./ProfileForm";
import LeaderBoard from "./LeaderBoard";
import BlogAndVideos from "./BlogAndVideos";

const Home = () => {
  return (
    <div>
      <Navbar />
      <WeeklyProgressReport />
      <LeaderBoard />
      <BlogAndVideos />
      <Footer />
    </div>
  );
};

export default Home;
