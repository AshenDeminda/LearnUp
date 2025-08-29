import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ArticleDetail.css';
import { articleApi } from '../api/articleApi';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const { data } = await articleApi.get(id);
        setArticle(data.item);
      } catch (e) {
        setError(e.message || 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  // Mapping between articles and their corresponding quizzes
  const articleToQuizMapping = {
    1: 1, 
    2: 2, 
    3: 3, 
    4: 4, 
    5: 5, 
    6: 6,  
    7: 7, 
    8: 8, 
    9: 9, 
    10: 10, 
    11: 11, 
    12: 12,
    13: 13
  };

  const handleTakeQuiz = () => {
    const quizId = articleToQuizMapping[article.id];
    if (quizId) {
      navigate(`/quiz/${quizId}`);
    } else {
      // If no specific quiz exists, navigate to quizzes page
      navigate('/quizzes');
    }
  };

  if (loading) {
    return (
      <div className="article-detail-page">
        <Navbar />
        <div className="article-not-found"><h2>Loading...</h2></div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-detail-page">
        <Navbar />
        <div className="article-not-found">
          <h2>{error || 'Article not found'}</h2>
          <button onClick={() => navigate('/tutorials')} className="back-button">
            Back to Tutorials
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <Navbar />
      
             {/* Hero Section */}
       <div className="article-hero">
         <div className="article-hero-background">
           <img src={article.image && article.image.startsWith('/uploads') ? `http://localhost:5000${article.image}` : article.image} alt={article.title} className="article-hero-image" />
           <div className="article-hero-overlay"></div>
           <div className="article-hero-content">
             <div className="article-category">{article.category}</div>
             <h1 className="article-title">{article.title}</h1>
             <p className="article-description">{article.description}</p>
             <div className="article-meta">
               <span className="article-read-time">{article.readTime}</span>
             </div>
           </div>
         </div>
       </div>

      {/* Article Content */}
      <div className="article-content-container">
        <div className="article-content">
          {/* Introduction */}
          <div className="article-section">
            <p className="article-introduction">{article.content.introduction}</p>
          </div>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <div key={index} className="article-section">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="article-actions">
          <div className="article-actions-buttons">
            <button onClick={() => navigate(-1)} className="back-button">
              ← Back to Articles
            </button>
            <button onClick={handleTakeQuiz} className="take-quiz-button">
              🧠 Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail; 