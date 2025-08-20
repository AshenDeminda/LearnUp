const mongoose = require('mongoose');
const Counter = require('./Counter');

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true, validate: v => v.length >= 2 },
  correctAnswer: { type: Number, required: true }
});

const quizSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, default: '' },
  category: { type: String, default: '' },
  image: { type: String, default: '' },
  questions: { type: [questionSchema], default: [] }
}, { timestamps: true });

quizSchema.pre('save', async function(next) {
  if (this.isNew && (this.id === undefined || this.id === null)) {
    this.id = await Counter.getNextSequence('quizId');
  }
  // Ensure question IDs are sequential if not provided
  if (Array.isArray(this.questions)) {
    this.questions = this.questions.map((q, idx) => ({
      id: q.id ?? idx + 1,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer
    }));
  }
  next();
});

module.exports = mongoose.model('Quiz', quizSchema);


