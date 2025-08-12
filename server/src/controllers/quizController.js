const UserQuizResult = require('../models/UserQuizResult');

// Save quiz result
const saveQuizResult = async (req, res) => {
  try {
    const { quizId, score, userAnswers } = req.body;
    const userId = req.user._id;

    // Check if user already has a result for this quiz
    let quizResult = await UserQuizResult.findOne({ userId, quizId });

    if (quizResult) {
      // Update existing result if new score is higher
      if (score > quizResult.score) {
        quizResult.score = score;
        quizResult.userAnswers = userAnswers || {};
        quizResult.completedAt = new Date();
        await quizResult.save();
      }
    } else {
      // Create new result
      quizResult = new UserQuizResult({
        userId,
        quizId,
        score,
        userAnswers: userAnswers || {},
        isSubmitted: true
      });
      await quizResult.save();
    }

    res.json({
      success: true,
      message: 'Quiz result saved successfully',
      data: {
        quizResult: quizResult.toJSON()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while saving quiz result',
      error: error.message
    });
  }
};

// Get user's quiz results
const getUserQuizResults = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const quizResults = await UserQuizResult.find({ userId })
      .sort({ completedAt: -1 });

    res.json({
      success: true,
      data: {
        quizResults: quizResults.map(result => result.toJSON())
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching quiz results',
      error: error.message
    });
  }
};

// Get specific quiz result for a user
const getQuizResult = async (req, res) => {
  try {
    const { quizId } = req.params;
    const userId = req.user._id;

    const quizResult = await UserQuizResult.findOne({ userId, quizId });

    if (!quizResult) {
      return res.status(404).json({
        success: false,
        message: 'Quiz result not found'
      });
    }

    res.json({
      success: true,
      data: {
        quizResult: quizResult.toJSON()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching quiz result',
      error: error.message
    });
  }
};

// Get user's best scores
const getUserBestScores = async (req, res) => {
  try {
    const userId = req.user._id;
    
    const bestScores = await UserQuizResult.aggregate([
      { $match: { userId: userId } },
      { $group: { 
        _id: '$quizId', 
        bestScore: { $max: '$score' },
        lastAttempt: { $max: '$completedAt' }
      }},
      { $sort: { bestScore: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        bestScores
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching best scores',
      error: error.message
    });
  }
};

module.exports = {
  saveQuizResult,
  getUserQuizResults,
  getQuizResult,
  getUserBestScores
};
