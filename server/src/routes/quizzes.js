const express = require('express');
const { 
  saveQuizResult, 
  getUserQuizResults, 
  getQuizResult, 
  getUserBestScores 
} = require('../controllers/quizController');
const auth = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(auth);

// Save quiz result
router.post('/results', saveQuizResult);

// Get user's quiz results
router.get('/results', getUserQuizResults);

// Get specific quiz result
router.get('/results/:quizId', getQuizResult);

// Get user's best scores
router.get('/best-scores', getUserBestScores);

module.exports = router;
