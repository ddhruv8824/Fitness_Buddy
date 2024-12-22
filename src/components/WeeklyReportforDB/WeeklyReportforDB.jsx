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
  const navigate = useNavigate();

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
          setData(response.data.data || {});
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

  if (!data.totalCaloriesBurned && !data.totalDuration) {
    return <div>No data available for weekly progress.</div>;
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
    <>
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
    </>
  );
};

export default WeeklyProgressReportforDB;
