/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./WeeklyReportforDB.css";
import { useNavigate } from "react-router-dom";

const WeeklyProgressReportforDB = () => {
  const [data, setData] = useState({
    totalCaloriesBurned: 0,
    totalDuration: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  //const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeeklyData = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        //setIsAuthenticated(false); // Set flag for unauthenticated user
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/workout/weekProgress",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setData(response.data.data || {});
        }
        console.log(response)
      } catch (error) {
        console.error("Error fetching weekly progress:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeeklyData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!localStorage.getItem("jwtToken")) {
    return (
      <div className="login-message">
        <h2>You are not logged in.</h2>
        <p>Please log in or sign up to view your weekly progress report.</p>
        <button onClick={() => navigate("/login")} className="login-button">
          Log In
        </button>
        <button onClick={() => navigate("/signup")} className="signup-button">
          Sign Up
        </button>
      </div>
    );
  }
  if (!data.totalCaloriesBurned && !data.totalDuration) {
    return (
      <div className="no-data-message">
        <h2>Welcome to Your Weekly Progress Dashboard!</h2>
        <p>
          It looks like you haven’t tracked any workouts yet. Start your fitness
          journey today to see detailed reports of your progress.
        </p>
        <button
          onClick={() => navigate("/WorkoutTracking")}
          className="track-workout-button"
        >
          Track Your First Workout
        </button>
      </div>
    );
  }

  const chartData = [
    {
      name: "Calories Burned",
      value: data.totalCaloriesBurned,
      color: "rgb(101, 139, 255)",
    },
    { name: "Duration (mins)", value: data.totalDuration, color: "#bfff00" },
  ];

  const chartData2 = [
    {
      name: "Total",
      Calories: data.totalCaloriesBurned,
      Duration: data.totalDuration,
    },
  ];

  const handleClick = () => {
    navigate("/WeeklyProgressReport");
  };

  return (
    <div className="weekly-report" onClick={handleClick}>
      <h2 className="report-title">Weekly Progress Report</h2>

      <div className="charts-grid">
        {/* Pie Chart */}
        <div className="pie-chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  color: "#e6e6e6",
                }}
              />
              <Legend wrapperStyle={{ color: "#e6e6e6" }} />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                animationDuration={1500}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bar-chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData2} barSize={100}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  color: "#e6e6e6",
                }}
              />
              <Legend />
              <Bar
                dataKey="Calories"
                fill="rgb(101, 139, 255)"
                name="Calories Burned"
              />
              <Bar dataKey="Duration" fill="#bfff00" name="Duration (mins)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProgressReportforDB;
