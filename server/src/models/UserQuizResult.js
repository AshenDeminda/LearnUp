const mongoose = require('mongoose');

const userQuizResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  quizId: {
    type: Number,
    required: [true, 'Quiz ID is required']
  },
  score: {
    type: Number,
    required: [true, 'Score is required'],
    min: [0, 'Score cannot be negative'],
    max: [100, 'Score cannot exceed 100']
  },
  isSubmitted: {
    type: Boolean,
    default: true
  },
  userAnswers: {
    type: Map,
    of: Number, // Store question ID -> selected answer index
    default: {}
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Compound index to ensure one result per user per quiz
userQuizResultSchema.index({ userId: 1, quizId: 1 }, { unique: true });

// Method to get formatted result
userQuizResultSchema.methods.toJSON = function() {
  const result = this.toObject();
  result.score = Math.round(result.score);
  return result;
};

module.exports = mongoose.model('UserQuizResult', userQuizResultSchema);
