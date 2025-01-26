import React from "react";
import "./Buddy.css";

const Buddy = () => {
  const exercises = [
    {
      icon: "🔄",
      title: "Flex Muscle",
      description:
        "Creating tension that's temporarily making the muscle fibers smaller or contracted.",
    },
    {
      icon: "📱",
      title: "Cardio Exercise",
      description:
        "Exercise your heart rate up and keeps it up for a prolonged period of time.",
    },
    {
      icon: "🧘",
      title: "Basic Yoga",
      description:
        "Diaphragmatic this is the most common breathing technique you'll find in yoga.",
    },
    {
      icon: "🏋️",
      title: "Weight Lifting",
      description:
        "Attempts a maximum weight single lift of a barbell loaded with weight plates.",
    },
    {
      icon: "🤸‍♂️",
      title: "black hole theory",
      description:
        "Diaphragmatic this is the most common breathing technique you'll find in yoga.",
    },
    {
      icon: "🏊‍♂️",
      title: "Swimming",
      description:
        "Keep your head down and only turn to take a breath,Start on your stomach with both arms stretched to the front, legs extended back and head up",
    },
  ];

  return (
    <div className="buddy-container">
      <h1 className="buddy-title">
        <span className="buddy-title-outline">BUILD YOUR</span>
        <span className="buddy-title-solid">BEST BODY</span>
      </h1>

      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <div className="exercise-icon">{exercise.icon}</div>
            <h3 className="exercise-title">{exercise.title}</h3>
            <p className="exercise-description">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buddy;
