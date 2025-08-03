import React, { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import "../styles/Tutorials.css";

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories from the design
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

  // Tutorial data - using ArticleCard format
  const tutorials = [
    {
      id: 1,
      title: "HTML Basics Tutorial",
      description: "Learn the fundamentals of HTML markup language, tags, and document structure.",
      readTime: "15 min read",
      category: "Web Development"
    },
    {
      id: 2,
      title: "CSS Styling Fundamentals",
      description: "Master CSS selectors, properties, and layout techniques for modern web design.",
      readTime: "20 min read",
      category: "Web Development"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features",
      description: "Explore modern JavaScript features including arrow functions, destructuring, and modules.",
      readTime: "25 min read",
      category: "Programming"
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      description: "Understand React hooks, custom hooks, and state management patterns.",
      readTime: "30 min read",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Python Data Analysis",
      description: "Learn pandas, numpy, and matplotlib for data manipulation and visualization.",
      readTime: "35 min read",
      category: "Data Science"
    },
    {
      id: 6,
      title: "Docker Container Basics",
      description: "Get started with Docker containers, images, and containerization concepts.",
      readTime: "18 min read",
      category: "DevOps"
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML algorithms, supervised learning, and model evaluation.",
      readTime: "40 min read",
      category: "Machine Learning"
    },
    {
      id: 8,
      title: "AWS Cloud Services",
      description: "Learn about AWS core services including EC2, S3, and Lambda functions.",
      readTime: "28 min read",
      category: "Cloud Computing"
    },
    {
      id: 9,
      title: "SQL Database Design",
      description: "Master database design principles, normalization, and SQL queries.",
      readTime: "22 min read",
      category: "Database Systems"
    },
    {
      id: 10,
      title: "Cybersecurity Best Practices",
      description: "Learn essential security practices for protecting applications and data.",
      readTime: "32 min read",
      category: "Cybersecurity"
    },
    {
      id: 11,
      title: "Git Version Control",
      description: "Master Git workflows, branching strategies, and collaborative development.",
      readTime: "16 min read",
      category: "Software Engineering"
    },
    {
      id: 12,
      title: "Neural Networks Introduction",
      description: "Understand the basics of neural networks and deep learning concepts.",
      readTime: "45 min read",
      category: "Artificial Intelligence"
    }
  ];

  // Filter tutorials based on search and category
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tutorial.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tutorials-page">
      {/* Use the Navbar component */}
      <Navbar />

      {/* Main Container */}
      <div className="tutorials-main-container">
        {/* Sidebar */}
        <aside className="tutorials-sidebar">
          <h2 className="tutorials-categories-title">CATEGORIES</h2>
          <div className="tutorials-categories-divider"></div>
          
          <div className="tutorials-categories-list">
            <div 
              className={`tutorials-category-item ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm133-160h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Zm-53 560h426-426Z"/></svg>
              All
            </div>
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`tutorials-category-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m200-120-80-480h720l-80 480H200Zm67-80h426l51-320H216l51 320Zm133-160h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Zm-53 560h426-426Z"/></svg>
                {category}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="tutorials-content">
          {/* Search Bar */}
          <div className="tutorials-search-container">
            <div className="tutorials-search-bar">
              <div className="tutorials-search-icon">🔍</div>
              <input
                type="text"
                className="tutorials-search-input"
                placeholder="Search Tutorial..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tutorials Grid */}
          <h2 className="tutorials-section-title">
            {selectedCategory === "All" ? "All Tutorials" : `${selectedCategory} Tutorials`}
          </h2>
          
          <div className="tutorials-grid">
            {filteredTutorials.map((tutorial) => (
              <ArticleCard
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                readTime={tutorial.readTime}
                image={tutorial.image}
              />
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              color: '#C0C0C3', 
              fontSize: '18px', 
              marginTop: '50px' 
            }}>
              No tutorials found matching your criteria.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Tutorials;
