import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/QuizDetail.css';

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Mock previous quiz results - in real app, this would come from backend
  const [previousResults, setPreviousResults] = useState([
    { quizId: 1, score: 85, date: '2024-01-15' },
    { quizId: 2, score: 92, date: '2024-01-10' },
    { quizId: 3, score: 78, date: '2024-01-05' }
  ]);

  // Quiz data - this will be expanded with full content
  const quizzes = [
    {
      id: 1,
      title: "HTML Basics Quiz",
      description: "Test your understanding of HTML tags, forms, and attributes.",
      duration: "8 min quiz",
      category: "Web Development",
      image: "/src/assets/articlepics/1.jpg",
      questions: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which HTML tag is used to define a paragraph?",
          options: [
            "<p>",
            "<paragraph>",
            "<text>",
            "<para>"
          ],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "Which HTML attribute is used to define inline styles?",
          options: [
            "class",
            "style",
            "css",
            "design"
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Which HTML element is used to create a hyperlink?",
          options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "Which HTML tag is used to define the main heading?",
          options: [
            "<h1>",
            "<head>",
            "<header>",
            "<title>"
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 2,
      title: "CSS Fundamentals Quiz",
      description: "Challenge yourself with CSS selectors, properties, and layouts.",
      duration: "10 min quiz",
      category: "Web Development",
      image: "/src/assets/articlepics/2.jpg",
      questions: [
        {
          id: 1,
          question: "What does CSS stand for?",
          options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "Which CSS property controls the text size?",
          options: [
            "text-size",
            "font-size",
            "text-style",
            "font-style"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "How do you add a background color for all <h1> elements?",
          options: [
            "h1 {background-color:#FFFFFF;}",
            "h1.all {background-color:#FFFFFF;}",
            "all.h1 {background-color:#FFFFFF;}",
            "h1 {bgcolor:#FFFFFF;}"
          ],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "Which CSS property is used to change the text color of an element?",
          options: [
            "fgcolor",
            "text-color",
            "color",
            "text-style"
          ],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "Which CSS property controls the space between elements?",
          options: [
            "margin",
            "padding",
            "border",
            "spacing"
          ],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 3,
      title: "JavaScript Basics Quiz",
      description: "Test your knowledge of JavaScript fundamentals and ES6 features.",
      duration: "12 min quiz",
      category: "Programming",
      image: "/src/assets/articlepics/3.jpg",
      questions: [
        {
          id: 1,
          question: "Which of the following is the correct way to declare a JavaScript variable?",
          options: [
            "variable x = 10;",
            "v x = 10;",
            "let x = 10;",
            "int x = 10;"
          ],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "Which method is used to convert a JSON string into a JavaScript object?",
          options: [
            "JSON.stringify()",
            "JSON.parse()",
            "parse.JSON()",
            "stringify.JSON()"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
          ],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "How do you create a function in JavaScript?",
          options: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "function => myFunction()"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "Which operator is used to assign a value to a variable?",
          options: [
            "*",
            "-",
            "=",
            "x"
          ],
          correctAnswer: 2
        }
      ]
    }
  ];

  const quiz = quizzes.find(q => q.id === parseInt(id));

  if (!quiz) {
    return (
      <div className="quiz-detail-page">
        <Navbar />
        <div className="quiz-not-found">
          <h2>Quiz not found</h2>
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

  const calculateScore = () => {
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
    
    // Here you would send the score to your backend
    // Example: saveQuizResult(quiz.id, percentage);
    console.log(`Quiz completed! Score: ${percentage}%`);
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
          <img src={quiz.image} alt={quiz.title} className="quiz-hero-image" />
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
                  >
                    Submit Quiz
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