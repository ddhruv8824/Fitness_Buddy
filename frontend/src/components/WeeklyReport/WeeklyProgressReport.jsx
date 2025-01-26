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
import "./WeeklyProgressReport.css"; // Custom styles for layout
import { Navbar } from "../Navbar/Navbar";
import WorkOutDay from "../WorkOutDay/WorkOutDay";

const WeeklyProgressReport = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/workout/weekProgress",  // Correct endpoint
          {
            headers: {
              Authorization: `Bearer ${token}`,  // Fixed token authorization
            },
          }
        );

        if (response.status === 200) {
          const { data } = response.data;
          setData(data);
        }
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
        <p>Loading your progress...</p>
      </div>
    );
  }

  if (!data || (data.totalCaloriesBurned === 0 && data.totalDuration === 0)) {
    return (
      <div className="no-data-message">
        <h2>Welcome to Your Weekly Progress Dashboard!</h2>
        <p>
          You haven't tracked any workouts yet. Start your fitness journey now
          to see your progress!
        </p>
        <button
          onClick={() => (window.location.href = "/trackWorkout")}
          className="track-workout-button"
        >
          Track Your First Workout
        </button>
      </div>
    );
  }

  const { totalCaloriesBurned, totalDuration } = data;

  const chartData = [
    {
      name: "Calories Burned",
      value: totalCaloriesBurned,
      color: "rgb(101, 139, 255)",
    },
    { name: "Duration (mins)", value: totalDuration, color: "#bfff00" },
  ];
  const chartData2 = [
    { name: "total", Calories: totalCaloriesBurned, Duration: totalDuration },
  ];

  return (
    <>
      <Navbar />
      <div className="weekly-report">
        <h2 className="report-title">Weekly Progress Report</h2>
        <div className="charts-grid">
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
        <WorkOutDay />
        <SummarySection
          totalCalories={totalCaloriesBurned}
          totalDuration={totalDuration}
        />
      </div>
    </>
  );
};

const SummarySection = ({ totalCalories, totalDuration }) => (
  <div className="summary">
    <h3>
      Summary: {totalCalories} Calories Burned, {totalDuration} Minutes Worked
      Out
    </h3>
    {totalCalories >= 5000 ? (
      <p className="summary-text success">
        Great job! You've exceeded your weekly goals!
      </p>
    ) : (
      <p className="summary-text encouraging">
        Keep pushing! You're doing great!
      </p>
    )}
  </div>
);

export default WeeklyProgressReport;
