import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizCard.css';

const QuizCard = ({ id, title, description, duration }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="quiz-card" onClick={handleClick}>
      <div className="quiz-card-content">
        <div className="quiz-card-title">{title}</div>
        <div className="quiz-card-description">{description}</div>
        <div className="quiz-card-duration">{duration}</div>
      </div>
    </div>
  );
};

export default QuizCard; 