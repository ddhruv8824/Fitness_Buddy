import React from 'react';
import './FitnessLanding.css';
import WeeklyProgressReport from '../WeeklyReport/WeeklyProgressReport';
import WeeklyProgressReportforDB from '../WeeklyReportforDB/WeeklyReportforDB';

const FitnessLanding = () => {
  const stats = [
    { number: 137, label: 'EXPERT COACHES' },
    { number: 978, label: 'MEMBERS JOINED' },
    { number: 34, label: 'FITNESS PROGRAMS' }
  ];

  return (
    <div className="fitness-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="brand-tag">
            THE BEST FITNESS CLUB IN THE TOWN
          </div>
        </div>

        <div className="main-content">
          <div className="left-section">
            <h1 className="title">
              <span className="outline-text">SHAPE</span> YOUR<br />
              IDEAL BODY
            </h1>
            
            <p className="description">
              In here we will help you to shape and build your ideal body and 
              live up your life to fullest
            </p>

            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">+{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="stats-overlay">
                <div className="heart-rate">
                  <span className="heart-icon">❤️</span>
                  <span>Heart Rate</span>
                  <span className="bpm">116 bpm</span>
                </div>
                <div className="calories">
                  <div className="calories-graph">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                  <span>Calories burned</span>
                  <span className="kcal">220 kcal</span>
                </div>
              </div>
          </div>

          <div className="right-section">
            <div className="image-container">
              {/* <img 
                src="https://www.completesports.com/wp-content/uploads/2020/06/400a5678-485d-11ea-9a9d-aed7af30eb98.jpg" 
                alt="Fitness person tying shoelace" 
                className="main-image" 
              /> */}
              <WeeklyProgressReportforDB/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessLanding;