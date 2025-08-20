const fs = require('fs');
const path = require('path');
const Article = require('../models/Article');
const Quiz = require('../models/Quiz');

const ensureUploadsDir = () => {
  const dir = path.join(__dirname, '../../uploads');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
};

const requireAdmin = (req) => {
  if (!req.user || !req.user.isAdmin) {
    const err = new Error('Admin access required');
    err.statusCode = 403;
    throw err;
  }
};

// Upload Article: expects fields { json: stringified article JSON, imageBase64: dataURL or base64, imageExt: 'jpg'|'png' }
const uploadArticle = async (req, res) => {
  try {
    requireAdmin(req);
    const { json, imageBase64, imageExt } = req.body;

    if (!json) return res.status(400).json({ success: false, message: 'Missing article JSON' });
    const payload = typeof json === 'string' ? JSON.parse(json) : json;

    const article = new Article(payload);
    await article.save();

    // Handle image save if provided
    if (imageBase64) {
      const uploadsDir = ensureUploadsDir();
      const ext = (imageExt || 'jpg').replace(/\./g, '');
      const fileName = `article_${article.id}.${ext}`;
      const filePath = path.join(uploadsDir, fileName);
      const base64Data = imageBase64.replace(/^data:\w+\/[-+.\w]+;base64,/, '');
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      article.image = `/uploads/${fileName}`;
      await article.save();
    }

    res.status(201).json({ success: true, data: { article } });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

// Upload Quiz: expects fields { json: stringified quiz JSON, imageBase64?: string, imageExt?: string }
const uploadQuiz = async (req, res) => {
  try {
    requireAdmin(req);
    const { json, imageBase64, imageExt } = req.body;
    if (!json) return res.status(400).json({ success: false, message: 'Missing quiz JSON' });
    const payload = typeof json === 'string' ? JSON.parse(json) : json;

    const quiz = new Quiz(payload);
    await quiz.save();

    if (imageBase64) {
      const uploadsDir = ensureUploadsDir();
      const ext = (imageExt || 'jpg').replace(/\./g, '');
      const fileName = `quiz_${quiz.id}.${ext}`;
      const filePath = path.join(uploadsDir, fileName);
      const base64Data = imageBase64.replace(/^data:\w+\/[-+.\w]+;base64,/, '');
      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      quiz.image = `/uploads/${fileName}`;
      await quiz.save();
    }

    res.status(201).json({ success: true, data: { quiz } });
  } catch (error) {
    res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

// Lists
const listArticles = async (req, res) => {
  try {
    const { category, q } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;
    if (q) filter.title = { $regex: q, $options: 'i' };
    const items = await Article.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: { items } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getArticle = async (req, res) => {
  try {
    const item = await Article.findOne({ id: Number(req.params.id) });
    if (!item) return res.status(404).json({ success: false, message: 'Article not found' });
    res.json({ success: true, data: { item } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const listQuizzes = async (req, res) => {
  try {
    const { category, q } = req.query;
    const filter = {};
    if (category && category !== 'All') filter.category = category;
    if (q) filter.title = { $regex: q, $options: 'i' };
    const items = await Quiz.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: { items } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getQuiz = async (req, res) => {
  try {
    const item = await Quiz.findOne({ id: Number(req.params.id) });
    if (!item) return res.status(404).json({ success: false, message: 'Quiz not found' });
    res.json({ success: true, data: { item } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  uploadArticle,
  uploadQuiz,
  listArticles,
  getArticle,
  listQuizzes,
  getQuiz
};


