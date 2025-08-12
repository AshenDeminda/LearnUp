const express = require('express');
const { 
  updateProfile, 
  changePassword, 
  updateProfileImage, 
  deleteAccount 
} = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(auth);

// Update user profile
router.put('/profile', updateProfile);

// Change password
router.put('/password', changePassword);

// Update profile image
router.put('/profile-image', updateProfileImage);

// Delete account
router.delete('/account', deleteAccount);

module.exports = router;
