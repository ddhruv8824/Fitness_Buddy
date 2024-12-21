/** @format */

import { useState } from "react";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";
import { SignUp } from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileForm from "./components/ProfileForm";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import Home from "./components/Home";
import WeeklyProgressReport from "./components/WeeklyProgressReport";
import WorkoutTracker from "./components/WorkOutTracker";
import BuddyMatching from "./components/BuddyMatching";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/WorkoutTracking" element={<WorkoutTracker />} />
          <Route path="/buddyMatching" element={<BuddyMatching />} />
          <Route
            path="/WeeklyProgressReport"
            element={<WeeklyProgressReport />}
          />
          <Route path="/CreateProfile" element={<ProfileForm />} />
          <Route path="/" element={<Home />} /> {/* Home component */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
