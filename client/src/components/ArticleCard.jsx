import React from 'react';
import '../styles/Home.css';

const ArticleCard = ({ title, description, readTime, image }) => {
  return (
    <div className="custom-article-card">
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