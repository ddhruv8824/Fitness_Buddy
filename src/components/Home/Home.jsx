/** @format */

import React from "react";
import FitnessLanding from "../FitnessLanding/FitnessLanding";
import { Navbar } from "../Navbar/Navbar";
import WeeklyProgressReport from "../WeeklyReport/WeeklyProgressReport";
import Footer from "../Footer/Footer";
import Faq from "../FAQ/Faq";
import Buddy from "../Buddy/Buddy";
import Search from "../Search/Search";
import Feedback from "../Feedback/Feedback";
import BmiCalculator from "../BmiCalculator/BmiCalculator";
import Map from "../Map/Map";
import PricingPlans from "../Plane/Plane";
const Home = () => {
  return (
    <div>
      <Navbar />
      <FitnessLanding />
      <Buddy />
      <BmiCalculator />
      <Feedback />
      <Faq />
      <PricingPlans />
      <Map />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
