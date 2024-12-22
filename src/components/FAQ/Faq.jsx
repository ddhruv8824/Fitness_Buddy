import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What Is FitMaker And How Can It Help Me Reach My Fitness Goals?",
      answer: "FitMaker Is An Online Fitness Platform That Offers Personalized Workout Plans, Expert Coaching, And Comprehensive Nutritional Guidance. Whether You're Looking To Lose Weight, Build Muscle, Or Simply Stay Fit, Our Tailored Programs And Community Support Will Help You Achieve Your Fitness Goals."
    },
    {
      question: "How Do I Get Started With A Workout Plan On FitMaker?",
      answer: "To get started, simply create an account and complete our fitness assessment. We'll use this information to create your personalized workout plan."
    },
    {
      question: "What Is Included In The Custom Plan?",
      answer: "Our custom plans include personalized workout routines, nutrition guidelines, progress tracking, and access to our expert coaching team."
    },
    {
      question: "Can I Change My Plan After Signing Up?",
      answer: "Yes, you can modify your plan at any time to better suit your evolving fitness needs and goals."
    },
    {
      question: "What Kind Of Support Can I Expect From My Trainer?",
      answer: "Our trainers provide regular check-ins, form corrections, workout adjustments, and motivational support throughout your fitness journey."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #1f1f1f 65%,rgba(255, 0, 0, 0.68) 35%',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '768px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>FAQ</h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              style={{
                border: '1px solid #8b0000',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                backgroundColor: '#2a2a2a'
              }}
            >
              <button
                style={{
                  width: '100%',
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <svg
                  style={{
                    width: '20px',
                    height: '20px',
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div 
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  color: '#cccccc',
                  padding: activeIndex === index ? '1rem' : '0'
                }}
                aria-hidden={activeIndex !== index}
              >
                <p style={{
                  margin: 0,
                  lineHeight: 1.6,
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;