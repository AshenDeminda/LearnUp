import React from 'react';
import '../styles/Home.css';
import ArticleCard from '../components/ArticleCard';

const Home = () => {
  // Dummy data for articles
  const articles = [
    {
      id: 1,
      title: "Getting Started with Programming",
      description: "Learn the basics of programming and start your coding journey",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      description: "Master the essential concepts of web development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      description: "Understanding core computer science concepts",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Introduction to Databases",
      description: "Explore the basics of databases and SQL",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Version Control with Git",
      description: "Learn how to manage code with Git and GitHub",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Frontend vs Backend Development",
      description: "Understand the difference between frontend and backend",
      readTime: "5 min read"
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
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2 className="section-title">Featured Articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
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