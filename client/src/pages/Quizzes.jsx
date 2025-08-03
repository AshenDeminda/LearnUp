import React, { useState } from "react";
import QuizCard from "../components/QuizCard";
import Navbar from "../components/Navbar";
import "../styles/Quizzes.css";

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories with their corresponding icons
  const categories = [
    "Cybersecurity",
    "Web Development", 
    "Data Science",
    "Programming",
    "DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "Software Engineering",
    "Database Systems"
  ];

  // Quiz data
  const quizzes = [
    {
      id: 1,
      title: "HTML Basics Quiz",
      description: "Test your understanding of HTML tags, forms, and attributes.",
      duration: "8 min quiz",
      category: "Web Development"
    },
    {
      id: 2,
      title: "CSS Fundamentals Quiz",
      description: "Challenge yourself with CSS selectors, properties, and layouts.",
      duration: "10 min quiz",
      category: "Web Development"
    },
    {
      id: 3,
      title: "JavaScript Basics Quiz",
      description: "Test your knowledge of JavaScript fundamentals and ES6 features.",
      duration: "12 min quiz",
      category: "Programming"
    },
    {
      id: 4,
      title: "React Components Quiz",
      description: "Evaluate your understanding of React components and hooks.",
      duration: "15 min quiz",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Python Data Types Quiz",
      description: "Test your knowledge of Python data types and structures.",
      duration: "10 min quiz",
      category: "Programming"
    },
    {
      id: 6,
      title: "Docker Basics Quiz",
      description: "Challenge yourself with Docker containers and images.",
      duration: "12 min quiz",
      category: "DevOps"
    },
    {
      id: 7,
      title: "Machine Learning Quiz",
      description: "Test your understanding of ML algorithms and concepts.",
      duration: "18 min quiz",
      category: "Machine Learning"
    },
    {
      id: 8,
      title: "AWS Services Quiz",
      description: "Evaluate your knowledge of AWS cloud services.",
      duration: "15 min quiz",
      category: "Cloud Computing"
    },
    {
      id: 9,
      title: "SQL Database Quiz",
      description: "Test your SQL query skills and database concepts.",
      duration: "12 min quiz",
      category: "Database Systems"
    },
    {
      id: 10,
      title: "Cybersecurity Quiz",
      description: "Challenge yourself with security concepts and best practices.",
      duration: "14 min quiz",
      category: "Cybersecurity"
    },
    {
      id: 11,
      title: "Git Version Control Quiz",
      description: "Test your knowledge of Git workflows and commands.",
      duration: "10 min quiz",
      category: "Software Engineering"
    },
    {
      id: 12,
      title: "AI Fundamentals Quiz",
      description: "Evaluate your understanding of artificial intelligence concepts.",
      duration: "16 min quiz",
      category: "Artificial Intelligence"
    }
  ];

  // Filter quizzes based on search and category
  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || quiz.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="quizzes-page">
      {/* Use the Navbar component */}
      <Navbar />

      {/* Main Container */}
      <div className="quizzes-main-container">
        {/* Sidebar */}
        <aside className="quizzes-sidebar">
          <h2 className="quizzes-categories-title">CATEGORIES</h2>
          <div className="quizzes-categories-divider"></div>
          
          <div className="quizzes-categories-list">
            <div 
              className={`quizzes-category-item ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm133-160h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Zm-53 560h426-426Z"/>
              </svg>
              All
            </div>
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`quizzes-category-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                  <path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm133-160h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Zm-53 560h426-426Z"/>
                </svg>
                {category}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="quizzes-content">
          {/* Search Bar */}
          <div className="quizzes-search-container">
            <div className="quizzes-search-bar">
              <div className="quizzes-search-icon">🔍</div>
              <input
                type="text"
                className="quizzes-search-input"
                placeholder="Search Quiz..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Quizzes Grid */}
          <h2 className="quizzes-section-title">
            {selectedCategory === "All" ? "All Quizzes" : `${selectedCategory} Quizzes`}
          </h2>
          
          <div className="quizzes-grid">
            {filteredQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                title={quiz.title}
                description={quiz.description}
                duration={quiz.duration}
              />
            ))}
          </div>

          {filteredQuizzes.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              color: '#C0C0C3', 
              fontSize: '18px', 
              marginTop: '50px' 
            }}>
              No quizzes found matching your criteria.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Quizzes;
