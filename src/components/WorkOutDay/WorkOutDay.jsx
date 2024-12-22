/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WorkOutDay.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WorkOutDay = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        alert("You are not logged in. Please log in first.");
        return;
      }

      try {
        const response = await axios.get(
          "https://fitness-buddy-app.onrender.com/getWorkoutDataForDay",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.status === 200) {
          const workoutData = response.data;
          console.log(response.data);
          setData([
            {
              name: "Sunday",
              value: workoutData.totalWorkoutDuration,
              calories: workoutData.totalCaloriesBurned,
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching workout data:", error);
        alert("Failed to fetch workout data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkoutData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data.length) {
    return <div>No data available for today's workout.</div>;
  }

  return (
    <div className="workout-day-container">
      <h2 id="Title">Workout Progress for Today</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          barSize={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Day", position: "insideBottom", dy: 10 }}
          />
          <YAxis
            label={{ value: "Metrics", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1a1a1a", color: "#e6e6e6" }}
          />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" name="Workout Duration (mins)" />
          <Bar dataKey="calories" fill="#82ca9d" name="Calories Burned" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkOutDay;
