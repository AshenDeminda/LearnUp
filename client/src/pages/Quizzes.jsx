import React, { useState } from "react";
import "../styles/Quizzes.css";

const quizTopic = "JavaScript Basics";
const questions = [
  {
    question: "What is the correct syntax to print a message in the console in JavaScript?",
    options: [
      "console.print('Hello')",
      "print('Hello')",
      "console.log('Hello')",
      "log.console('Hello')"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["Number", "Float", "Character", "Double"],
    answer: 0
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var myVar;", "int myVar;", "let myVar = 0;", "Both A and C"],
    answer: 3
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: 0
  },
  {
    question: "What is the output of: typeof null?",
    options: ["'object'", "'null'", "'undefined'", "'number'"],
    answer: 0
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toObject()"],
    answer: 0
  },
  {
    question: "How do you write an array in JavaScript?",
    options: ["let arr = (1,2,3)", "let arr = [1,2,3]", "let arr = {1,2,3}", "let arr = <1,2,3>"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "var", "const", "constant"],
    answer: 2
  },
  {
    question: "What will '2' + 2 output in JavaScript?",
    options: ["4", "'22'", "NaN", "Error"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a JavaScript loop?",
    options: ["for", "while", "foreach", "do-while"],
    answer: 2
  }
];

const Quizzes = () => {
  const [selected, setSelected] = useState(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIdx, oIdx) => {
    const updated = [...selected];
    updated[qIdx] = oIdx;
    setSelected(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sc = 0;
    selected.forEach((ans, idx) => {
      if (ans === questions[idx].answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <div className="quiz-page-bg">
      <div className="quiz-card">
        <h1 className="quiz-title">Quiz: {quizTopic}</h1>
        <form onSubmit={handleSubmit}>
          {questions.map((q, idx) => (
            <div className="quiz-question-card" key={idx}>
              <div className="quiz-question">{idx + 1}. {q.question}</div>
              <div className="quiz-options">
                {q.options.map((opt, oIdx) => (
                  <label key={oIdx} className={`quiz-option-label${selected[idx] === oIdx ? ' selected' : ''}`}>
                    <input
                      type="radio"
                      name={`q${idx}`}
                      value={oIdx}
                      checked={selected[idx] === oIdx}
                      onChange={() => handleOptionChange(idx, oIdx)}
                      disabled={submitted}
                    />
                    <span className="quiz-custom-radio"></span>
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
          {!submitted ? (
            <button className="quiz-submit-btn" type="submit">Submit Quiz</button>
          ) : (
            <div className="quiz-score">Your Score: {score} / 10</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Quizzes;
