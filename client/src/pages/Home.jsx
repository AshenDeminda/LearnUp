import React from 'react';
import '../styles/Home.css';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  // Featured articles from tutorials
  const articles = [
    {
      id: 1,
      title: "HTML Basics Tutorial",
      description: "Learn the fundamentals of HTML markup language, tags, and document structure.",
      readTime: "15 min read",
      image: "/src/assets/articlepics/1.jpg"
    },
    {
      id: 2,
      title: "CSS Styling Fundamentals",
      description: "Master CSS selectors, properties, and layout techniques for modern web design.",
      readTime: "20 min read",
      image: "/src/assets/articlepics/2.jpg"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description: "Explore modern JavaScript features including arrow functions, destructuring, and modules.",
      readTime: "25 min read",
      image: "/src/assets/articlepics/3.jpg"
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      description: "Understand React hooks, custom hooks, and state management patterns.",
      readTime: "30 min read",
      image: "/src/assets/articlepics/4.jpg"
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Learn pandas, numpy, and matplotlib for data manipulation and visualization.",
      readTime: "35 min read",
      image: "/src/assets/articlepics/5.jpg"
    },
    {
      id: 6,
      title: "Docker Container Basics",
      description: "Get started with Docker containers, images, and containerization concepts.",
      readTime: "18 min read",
      image: "/src/assets/articlepics/6.jpg"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '100vh' }}>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to LearnUp</h1>
          <p className="hero-subtitle">Your journey to knowledge starts here</p>
          <button className="cta-button">Get Started</button>
        </div>
        {/* Scroll Down Symbol */}
        <div className="scroll-down-symbol">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2 className="section-title">Featured Articles</h2>
                  <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                readTime={article.readTime}
                image={article.image}
              />
            ))}
          </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LearnUp</h3>
            <p>Empowering learners worldwide</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <span>Facebook</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 LearnUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 