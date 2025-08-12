const express = require('express');
const { signup, signin, getProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signin', signin);

// Protected routes
router.get('/profile', auth, getProfile);

module.exports = router;
