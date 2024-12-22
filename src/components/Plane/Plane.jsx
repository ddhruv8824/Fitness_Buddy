import React, { useState } from 'react';
import './Plane.css';

const PricingPlans = () => {
  const [billingType, setBillingType] = useState('monthly');

  const plans = [
    {
      name: 'PRO PLAN',
      description: 'Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Advanced, Personalized Workout Plans',
        'Comprehensive Nutrition Coaching',
        'Access To Advanced Workout Programs',
        'Body Composition Analysis'
      ],
      price: 99,
      color: 'orange'
    },
    {
      name: 'CUSTOM PLAN',
      description: 'Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Fully Customized Workout And Nutrition Plan',
        'Weekly Check-Ins With Your Trainer',
        'Access To All Platform Features',
        'Exclusive Gear Discounts'
      ],
      price: 149,
      color: 'red',
      featured: true
    },
    {
      name: 'BEGINNER PLAN',
      description: 'Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.',
      features: [
        'Access To All Of Our Exercise Videos',
        'Progress Tracking',
        'Supportive Online Community',
        'Personalized Workout Plans',
        'Basic Nutrition Guidance',
        'Access To Group Fitness Classes',
        'Expore Black Hole Challenges'
      ],
      price: 49,
      color: 'orange'
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-content">
        <h1 className="pricing-title">
          Our <span className="highlight">Plans</span>
        </h1>
        
        <p className="pricing-subtitle">
          Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
        </p>


        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
            >
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-features">
                <h4 className={`features-title ${plan.featured ? 'featured' : ''}`}>
                  Features
                </h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="bullet">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">/USDT</span>
              </div>

              <button
                className={`choose-plan-button ${plan.featured ? 'featured' : ''}`}
                onClick={()=> window.open('https://postimg.cc/vgqnL85R')}
               > 
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;