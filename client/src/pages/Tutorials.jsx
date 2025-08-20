import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import "../styles/Tutorials.css";
import { articleApi } from "../api/articleApi";

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
    "Database Systems",
  ];

  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const { data } = await articleApi.list();
        setTutorials(data.items || []);
      } catch (e) {
        setError(e.message || 'Failed to load tutorials');
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

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
          
          {loading && <div style={{ color: '#C0C0C3' }}>Loading...</div>}
          {error && <div style={{ color: '#ff6b6b' }}>{error}</div>}
          {!loading && !error && (
            <div className="tutorials-grid">
              {filteredTutorials.map((tutorial) => (
                <ArticleCard
                  key={tutorial.id}
                  id={tutorial.id}
                  title={tutorial.title}
                  description={tutorial.description}
                  readTime={tutorial.readTime}
                  image={tutorial.image}
                />
              ))}
            </div>
          )}

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
