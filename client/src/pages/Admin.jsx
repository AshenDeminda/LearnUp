
import React, { useState } from 'react';
import '../styles/Admin.css';
import { articleApi } from '../api/articleApi';
import { quizApi } from '../api/quizApi';

const Admin = () => {
  const [mode, setMode] = useState('article');
  const [articleJson, setArticleJson] = useState(null);
  const [articleImg, setArticleImg] = useState(null);
  const [quizJson, setQuizJson] = useState(null);
  const [quizImg, setQuizImg] = useState(null);

  // For previewing file names
  const getFileName = (file) => file ? file.name : 'No file chosen';

  // Handlers
  const handleArticleJson = (e) => setArticleJson(e.target.files[0]);
  const handleArticleImg = (e) => setArticleImg(e.target.files[0]);
  const handleQuizJson = (e) => setQuizJson(e.target.files[0]);
  const handleQuizImg = (e) => setQuizImg(e.target.files[0]);

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      const chunk = bytes.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    return btoa(binary);
  };

  const fileToDataURL = async (file) => {
    const buffer = await file.arrayBuffer();
    const base64 = arrayBufferToBase64(buffer);
    const mime = file.type || 'application/octet-stream';
    return `data:${mime};base64,${base64}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'article') {
        if (!articleJson) return alert('Select article JSON');
        const jsonText = await articleJson.text();
        const imageBase64 = articleImg ? await fileToDataURL(articleImg) : null;
        const imageExt = articleImg ? (articleImg.name.split('.').pop() || 'jpg') : null;
        const res = await articleApi.upload({ json: jsonText, imageBase64, imageExt });
        alert(`Article uploaded with id ${res.data.article.id}`);
        setArticleJson(null); setArticleImg(null);
      } else {
        if (!quizJson) return alert('Select quiz JSON');
        const jsonText = await quizJson.text();
        const imageBase64 = quizImg ? await fileToDataURL(quizImg) : null;
        const imageExt = quizImg ? (quizImg.name.split('.').pop() || 'jpg') : null;
        const res = await quizApi.upload({ json: jsonText, imageBase64, imageExt });
        alert(`Quiz uploaded with id ${res.data.quiz.id}`);
        setQuizJson(null); setQuizImg(null);
      }
    } catch (err) {
      alert(`Upload failed: ${err.message}`);
    }
  };

  const articleFormat = `{
  "title": "Your Article Title",
  "description": "Brief description of the article",
  "readTime": "5 min read",
  "image": "",
  "category": "Category Name",
  "content": {
    "introduction": "Introduction text here",
    "sections": [
      {
        "title": "Section Title",
        "content": "Section content here"
      }
    ]
  }
}`;

  const quizFormat = `{
  "title": "Your Quiz Title",
  "description": "Brief description of the quiz",
  "duration": "5 min quiz",
  "category": "Category Name",
  "image": "",
  "questions": [
    {
      "id": 1,
      "question": "Your question here?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctAnswer": 0
    }
  ]
}`;

  return (
    <div className="admin-panel-container">
      <div className="admin-header">
        <h1 className="admin-panel-title">LearnUp Admin</h1>
        <p className="admin-panel-desc">Upload Articles and Quizzes</p>
      </div>

      <div className="admin-content">
        {/* Upload Section */}
        <div className="admin-upload-section">
          <form className="admin-panel-form" onSubmit={handleSubmit}>
            <div className="admin-panel-toggle">
              <button
                type="button"
                className={`admin-panel-toggle-btn${mode === 'article' ? ' active' : ''}`}
                onClick={() => setMode('article')}
              >
                Article
              </button>
              <button
                type="button"
                className={`admin-panel-toggle-btn${mode === 'quiz' ? ' active' : ''}`}
                onClick={() => setMode('quiz')}
              >
                Quiz
              </button>
            </div>

            <h2>Upload {mode === 'article' ? 'Article' : 'Quiz'}</h2>
            
            <div className="image-requirement">
              Image size: 1472x832 pixels
            </div>

            <div className="form-group">
              <label>JSON File</label>
              <div className="placeholder">
                {mode === 'article' 
                  ? (articleJson ? getFileName(articleJson) : 'Choose JSON file')
                  : (quizJson ? getFileName(quizJson) : 'Choose JSON file')
                }
              </div>
              <input 
                type="file" 
                accept="application/json" 
                onChange={mode === 'article' ? handleArticleJson : handleQuizJson} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Image</label>
              <div className="placeholder">
                {mode === 'article' 
                  ? (articleImg ? getFileName(articleImg) : 'Choose image file')
                  : (quizImg ? getFileName(quizImg) : 'Choose image file')
                }
              </div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={mode === 'article' ? handleArticleImg : handleQuizImg} 
                required 
              />
            </div>

            <button type="submit">
              Upload {mode === 'article' ? 'Article' : 'Quiz'}
            </button>
          </form>
        </div>

        {/* Format Section */}
        <div className="admin-examples-section">
          <div className="examples-section">
            <h3>JSON Format</h3>
            
            <div className="example-content">
              <pre>{mode === 'article' ? articleFormat : quizFormat}</pre>
            </div>

            <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '8px', fontSize: '0.9rem', color: '#a8b2d1' }}>
              <strong>Tips:</strong>
              <ul style={{ margin: '8px 0 0 20px', padding: 0 }}>
                <li>Use double quotes for strings</li>
                <li>correctAnswer is 0-based index</li>
                <li>Images auto-rename to {mode === 'article' ? 'article_' : 'quiz_'}[id].[ext]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
