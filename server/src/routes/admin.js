const express = require('express');
const auth = require('../middleware/auth');
const {
  uploadArticle,
  uploadQuiz,
  listArticles,
  getArticle,
  listQuizzes,
  getQuiz
} = require('../controllers/adminController');

const router = express.Router();

// Public listing endpoints for frontend consumption
router.get('/articles', listArticles);
router.get('/articles/:id', getArticle);
router.get('/quizzes', listQuizzes);
router.get('/quizzes/:id', getQuiz);

// Admin-only upload endpoints
router.post('/articles', auth, uploadArticle);
router.post('/quizzes', auth, uploadQuiz);

module.exports = router;


