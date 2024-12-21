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
import "../Styles/weeklyReport.css"; // Custom styles for layout

const WeeklyProgressReport = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        return;
      }

      try {
        const response = await axios.get(
          "https://fitness-buddy-app.onrender.com/weekProgress",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 200) {
          const { data } = response.data;
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching weekly progress:", error);
        alert("Failed to fetch weekly progress. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeeklyData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available for weekly progress.</div>;
  }

  const { totalCaloriesBurned, totalDuration , dailyProgress} = data;

  // Pie chart data
  const chartData = [
    { name: "Calories Burned", value: totalCaloriesBurned, color: "#82ca9d" },
    { name: "Duration (mins)", value: totalDuration, color: "#8884d8" },
  ];

  return (
    <div className="weekly-report">
      <h2 className="report-title">Weekly Progress Report</h2>

      {/* Main Layout */}
      <div className="charts-grid">
        <div className="pie-chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
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
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="value" />
              <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
              <Legend />
              <Bar dataKey="name" fill="#8884d8" name="Calories Burned" />
              <Bar dataKey="value" fill="#8884d8" name="Duration (mins)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <SummarySection totalCalories={totalCaloriesBurned} totalDuration={totalDuration} />
    </div>
  );
};

// Summary Section
const SummarySection = ({ totalCalories, totalDuration }) => (
  <div className="summary">
    <h3>
      Summary: {totalCalories} Calories Burned, {totalDuration} Minutes Worked Out
    </h3>
    {totalCalories >= 5000 ? (
      <p className="summary-text success">Great job! You've exceeded your weekly goals!</p>
    ) : (
      <p className="summary-text encouraging">Keep pushing! You're doing great!</p>
    )}
  </div>
);

export default WeeklyProgressReport;
