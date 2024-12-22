/** @format */

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUP/SignUp";
import WorkoutTracker from "./components/WorkOutTracking/WorkOutTracker";
import BuddyMatching from "./components/BuddyMatchin/BuddyMatching";
import WeeklyProgressReport from "./components/WeeklyReport/WeeklyProgressReport";
import ProfileForm from "./components/CreateProfile/ProfileForm";
function App() {
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
