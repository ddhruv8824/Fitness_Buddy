import React, { useState, useEffect } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbacks = [
    {
      id: 1,
      name: "Druv",
      role: "Fitness Trainer",
      content:
        "This article from the Heart Foundation discusses the importance of physical activity for health and well-being, including",
      avatar: "https://img.freepik.com/premium-vector/young-man-practicing-yoga-tree-pose_107173-17387.jpg?ga=GA1.1.2037253775.1733877773&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Vijay",
      role: "GYM Trainer",
      content:
        "Cancer risk: Exercise can reduce the risk of developing many types of cancer, including breast, colon, and lung cancer Bone health: Exercise can help build strong bones in children and teens, and slow",
      avatar: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?ga=GA1.1.2037253775.1733877773&semt=ais_hybrid",
    },
    {
        id: 3,
        name: "Vivek",
        role: "Yoga Trainer",
        content:
          "Cancer risk: Exercise can reduce the risk of developing many types of cancer, including breast, colon, and lung cancer Bone health: Exercise can help build strong bones in children and teens, and slow",
        avatar: "https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg?ga=GA1.1.2037253775.1733877773&semt=ais_hybrid",
      },
      {
        id: 4,
        name: "Lavanya",
        role: "Fitness Trainer",
        content:
          "Cancer risk: Exercise can reduce the risk of developing many types of cancer, including breast, colon, and lung cancer Bone health: Exercise can help build strong bones in children and teens, and slow",
        avatar: "https://img.freepik.com/free-photo/side-view-athletic-woman-gym-wear-with-headphones_23-2148398804.jpg?ga=GA1.1.2037253775.1733877773&semt=ais_hybrid",
      },
      {
        id: 5,
        name: "Somya",
        role: "Cardio Expert",
        content:
          "Cancer risk: Exercise can reduce the risk of developing many types of cancer, including breast, colon, and lung cancer Bone health: Exercise can help build strong bones in children and teens, and slow",
        avatar: "https://img.freepik.com/free-photo/woman-training-against-pink-with-jump-rope_155003-4143.jpg?ga=GA1.1.2037253775.1733877773&semt=ais_hybrid",
      },
    // Add more feedback items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">articles about fitness🧻</h1>
      <div className="trustpilot-badge">
        <span>See our reviews on</span>
        <img
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
          alt="Trustpilot"
          className="trustpilot-logo"
        />
      </div>

      <div className="feedback-slider">
        <div
          className="feedback-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-slide">
              <div className="feedback-content">
                <div className="feedback-header">
                  <img
                    src={feedback.avatar}
                    alt={feedback.name}
                    className="feedback-avatar"
                  />
                  <div className="feedback-author">
                    <h3 className="feedback-name">{feedback.name}</h3>
                    <p className="feedback-role">{feedback.role}</p>
                  </div>
                </div>
                <p className="feedback-text">{feedback.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-dots">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
