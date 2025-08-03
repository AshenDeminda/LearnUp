import React from 'react';
import '../styles/QuizCard.css';

const QuizCard = ({ title, description, duration }) => {
  return (
    <div className="quiz-card">
      <div className="quiz-card-content">
        <div className="quiz-card-title">{title}</div>
        <div className="quiz-card-description">{description}</div>
        <div className="quiz-card-duration">{duration}</div>
      </div>
    </div>
  );
};

export default QuizCard; 