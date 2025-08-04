import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const ArticleCard = ({ id, title, description, readTime, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="custom-article-card" onClick={handleClick}>
      <div className="custom-article-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="custom-article-image" />
        ) : (
          <div className="custom-placeholder-image">🖼️</div>
        )}
      </div>
      <div className="custom-article-content">
        <div className="custom-article-title">{title}</div>
        <div className="custom-article-description">{description}</div>
        <div className="custom-article-readtime">{readTime}</div>
      </div>
    </div>
  );
};

export default ArticleCard; 