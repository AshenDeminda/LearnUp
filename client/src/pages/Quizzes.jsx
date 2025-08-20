import React, { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import Navbar from "../components/Navbar";
import "../styles/Quizzes.css";
import { quizApi } from "../api/quizApi";

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

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        setLoading(true);
        const { data } = await quizApi.list();
        setQuizzes(data.items || []);
      } catch (e) {
        setError(e.message || 'Failed to load quizzes');
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

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
          
          {loading && <div style={{ color: '#C0C0C3' }}>Loading...</div>}
          {error && <div style={{ color: '#ff6b6b' }}>{error}</div>}
          {!loading && !error && (
            <div className="quizzes-grid">
              {filteredQuizzes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  id={quiz.id}
                  title={quiz.title}
                  description={quiz.description}
                  duration={quiz.duration}
                />
              ))}
            </div>
          )}

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
