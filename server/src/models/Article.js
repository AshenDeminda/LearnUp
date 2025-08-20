const mongoose = require('mongoose');
const Counter = require('./Counter');

const articleSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    index: true
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  readTime: { type: String, default: '' },
  image: { type: String, default: '' },
  category: { type: String, default: '' },
  content: {
    introduction: { type: String, default: '' },
    sections: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true }
      }
    ]
  }
}, { timestamps: true });

articleSchema.pre('save', async function(next) {
  if (this.isNew && (this.id === undefined || this.id === null)) {
    this.id = await Counter.getNextSequence('articleId');
  }
  next();
});

module.exports = mongoose.model('Article', articleSchema);


