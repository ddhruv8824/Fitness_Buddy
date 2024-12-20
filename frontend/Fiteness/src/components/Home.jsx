/** @format */

import React from "react";
import { Navbar } from "./Navbar";
import UserCard from "./UserCard";
import Footer from "./Footer";
import WeeklyProgressReport from "./WeeklyProgressReport";
import ProfileForm from "./ProfileForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <UserCard />
      Home
      <WeeklyProgressReport />
      <ProfileForm />
      <Footer />
    </div>
  );
};

export default Home;
