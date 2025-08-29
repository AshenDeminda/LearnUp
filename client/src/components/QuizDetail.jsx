import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { quizApi } from '../api/quizApi';
import Navbar from './Navbar';
import '../styles/QuizDetail.css';

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [previousResults, setPreviousResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load quiz from backend
  const [quiz, setQuiz] = useState(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [quizError, setQuizError] = useState('');

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoadingQuiz(true);
        const { data } = await quizApi.get(id);
        setQuiz(data.item);
      } catch (e) {
        setQuizError(e.message || 'Failed to load quiz');
      } finally {
        setLoadingQuiz(false);
      }
    };
    fetchQuiz();
  }, [id]);

  // Use fetched quiz
  // const quiz = quizzes.find(q => q.id === parseInt(id));

  // Load user's quiz results on component mount
  useEffect(() => {
    if (isAuthenticated && user) {
      loadUserQuizResults();
    }
  }, [isAuthenticated, user]);

  const loadUserQuizResults = async () => {
    try {
      const response = await quizApi.getUserQuizResults();
      const results = response.data.quizResults.map(result => ({
        quizId: result.quizId,
        score: result.score,
        date: new Date(result.completedAt).toISOString().split('T')[0]
      }));
      setPreviousResults(results);
    } catch (error) {
      console.error('Failed to load quiz results:', error);
    }
  };

  if (loadingQuiz) {
    return (
      <div className="quiz-detail-page">
        <Navbar />
        <div className="quiz-not-found">
          <h2>Loading...</h2>
          <button onClick={() => navigate('/quizzes')} className="back-button">
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }
  if (quizError || !quiz) {
    return (
      <div className="quiz-detail-page">
        <Navbar />
        <div className="quiz-not-found">
          <h2>{quizError || 'Quiz not found'}</h2>
          <button onClick={() => navigate('/quizzes')} className="back-button">
            Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionId, answerIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = async () => {
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const percentage = (correctAnswers / quiz.questions.length) * 100;
    setScore(percentage);
    setIsCompleted(true);
    
    // Add new result to previous results
    const newResult = {
      quizId: quiz.id,
      score: percentage,
      date: new Date().toISOString().split('T')[0]
    };
    setPreviousResults(prev => [newResult, ...prev]);
    
    // Save quiz result to backend if user is authenticated
    if (isAuthenticated && user) {
      setIsLoading(true);
      try {
        await quizApi.saveQuizResult({
          quizId: quiz.id,
          score: percentage,
          userAnswers: userAnswers
        });
        console.log(`Quiz result saved! Score: ${percentage}%`);
      } catch (error) {
        console.error('Failed to save quiz result:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log(`Quiz completed! Score: ${percentage}%`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = quiz.questions[currentQuestion];
  
  // Get previous result for this quiz
  const previousResult = previousResults.find(result => result.quizId === quiz.id);

  return (
    <div className="quiz-detail-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="quiz-hero">
        <div className="quiz-hero-background">
          <img src={quiz.image && quiz.image.startsWith('/uploads') ? `http://localhost:5000${quiz.image}` : quiz.image} alt={quiz.title} className="quiz-hero-image" />
          <div className="quiz-hero-overlay"></div>
          <div className="quiz-hero-content">
            <div className="quiz-category">{quiz.category}</div>
            <h1 className="quiz-title">{quiz.title}</h1>
            <p className="quiz-description">{quiz.description}</p>
            <div className="quiz-meta">
              <span className="quiz-duration">{quiz.duration}</span>
              <span className="quiz-questions-count">{quiz.questions.length} questions</span>
            </div>
            
            {/* Previous Result Display */}
            {previousResult && (
              <div className="previous-result">
                <div className="previous-result-badge">
                  <span className="previous-score">{Math.round(previousResult.score)}%</span>
                  <span className="previous-label">Previous Best</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="quiz-content-container">
        <div className="quiz-content">
          {!isCompleted ? (
            <>
              {/* Progress Bar */}
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </div>
              </div>

              {/* Question */}
              <div className="question-container">
                <h2 className="question-title">{currentQ.question}</h2>
                
                <div className="options-container">
                  {currentQ.options.map((option, index) => (
                    <label key={index} className="option-label">
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        value={index}
                        checked={userAnswers[currentQ.id] === index}
                        onChange={() => handleAnswerSelect(currentQ.id, index)}
                        className="option-input"
                      />
                      <span className="option-text">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="quiz-navigation">
                <button 
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="nav-button prev-button"
                >
                  ← Previous
                </button>
                
                {currentQuestion === quiz.questions.length - 1 ? (
                  <button 
                    onClick={calculateScore}
                    className="nav-button submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit Quiz"}
                  </button>
                ) : (
                  <button 
                    onClick={handleNextQuestion}
                    className="nav-button next-button"
                  >
                    Next →
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results Section */
            <div className="quiz-results">
              <h2 className="results-title">Quiz Completed!</h2>
              <div className="score-container">
                <div className="score-circle">
                  <span className="score-percentage">{Math.round(score)}%</span>
                </div>
                <p className="score-text">
                  You got {Math.round(score)}% of the questions correct!
                </p>
              </div>
              
              <div className="results-actions">
                <button 
                  onClick={() => {
                    setCurrentQuestion(0);
                    setUserAnswers({});
                    setIsCompleted(false);
                    setScore(0);
                  }}
                  className="retake-button"
                >
                  Retake Quiz
                </button>
                <button 
                  onClick={() => navigate('/quizzes')}
                  className="back-button"
                >
                  Back to Quizzes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizDetail; 