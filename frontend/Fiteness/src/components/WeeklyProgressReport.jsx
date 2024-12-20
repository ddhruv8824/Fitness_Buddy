/** @format */

import React, { useState } from "react";
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

// Sample Data
const demoData = [
  { weekStartDate: "2024-12-01", totalWorkoutsCompleted: 4, totalCaloriesBurned: 1200 },
  { weekStartDate: "2024-12-08", totalWorkoutsCompleted: 5, totalCaloriesBurned: 1400 },
  { weekStartDate: "2024-12-15", totalWorkoutsCompleted: 3, totalCaloriesBurned: 1100 },
];

const WeeklyProgressReport = () => {
  const [data] = useState(demoData); // Demo data used for now

  // Total Calculations for Summary
  const totalWorkouts = data.reduce((acc, curr) => acc + curr.totalWorkoutsCompleted, 0);
  const totalCalories = data.reduce((acc, curr) => acc + curr.totalCaloriesBurned, 0);

  // Pie chart data for workouts and calories
  const workoutsChartData = [
    { name: "Workouts", value: totalWorkouts, color: "#ff4d4d" },
  ];
  const caloriesChartData = [
    { name: "Calories", value: totalCalories, color: "#82ca9d" },
  ];

  return (
    <div className="weekly-report">
      <h2 className="report-title">Weekly Progress Report</h2>

      {/* Main Layout */}
      <div className="charts-grid">
        <div className="pie-chart-container">
          <WorkoutsPieChart data={workoutsChartData} />
        </div>
        <div className="pie-chart-container">
          <CaloriesPieChart data={caloriesChartData} />
        </div>
      </div>

      <div className="charts-grid">
        <div className="bar-graph-container">
          <WorkoutsBarChart data={data} />
        </div>
        <div className="bar-graph-container">
          <CaloriesBarChart data={data} />
        </div>
      </div>

      <SummarySection totalWorkouts={totalWorkouts} totalCalories={totalCalories} />
    </div>
  );
};

// Pie Chart for Workouts
const WorkoutsPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
      <Legend wrapperStyle={{ color: "#e6e6e6" }} />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        animationDuration={1500}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

// Pie Chart for Calories
const CaloriesPieChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
      <Legend wrapperStyle={{ color: "#e6e6e6" }} />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        animationDuration={1500}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

// Bar Chart for Weekly Workouts
const WorkoutsBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="weekStartDate" />
      <YAxis />
      <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
      <Legend />
      <Bar dataKey="totalWorkoutsCompleted" fill="#ff4d4d" barSize={40} />
    </BarChart>
  </ResponsiveContainer>
);

// Bar Chart for Weekly Calories
const CaloriesBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="weekStartDate" />
      <YAxis />
      <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }} />
      <Legend />
      <Bar dataKey="totalCaloriesBurned" fill="#82ca9d" barSize={50} />
    </BarChart>
  </ResponsiveContainer>
);

// Summary Section
const SummarySection = ({ totalWorkouts, totalCalories }) => (
  <div className="summary">
    <h3>
      Summary: {totalWorkouts} Workouts Completed, {totalCalories} Calories Burned
    </h3>
    {totalWorkouts >= 5 ? (
      <p className="summary-text success">Great job! You've exceeded your weekly goals!</p>
    ) : (
      <p className="summary-text encouraging">Keep pushing! You're almost at your weekly goals.</p>
    )}
  </div>
);

export default WeeklyProgressReport;
