const User = require('../models/User');
const UserQuizResult = require('../models/UserQuizResult');
const bcrypt = require('bcryptjs');

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const { name, age, email, profileImage } = req.body;
    const userId = req.user._id;
    
  // [DEBUG/LOGGING]
  // console.log('Profile update request for user:', userId);
  // console.log('Update data:', { name, age, email, profileImageLength: profileImage ? profileImage.length : 0 });

    // Check if email is being changed and if it's already taken
    if (email && email !== req.user.email) {
      const existingUser = await User.findOne({ email, _id: { $ne: userId } });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email is already taken by another user'
        });
      }
    }

    // Update user fields
    const updateFields = {};
    if (name !== undefined) updateFields.name = name;
    if (age !== undefined) updateFields.age = age;
    if (email !== undefined) updateFields.email = email;
    if (profileImage !== undefined) updateFields.profileImage = profileImage;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateFields,
      { new: true, runValidators: true }
    );
    
  // [DEBUG/LOGGING]
  // console.log('User updated successfully:', updatedUser._id);
  // console.log('Updated fields:', updateFields);

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user: updatedUser.toJSON()
      }
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error while updating profile',
      error: error.message
    });
  }
};

// Change password
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user._id;

    // Verify current password
    const user = await User.findById(userId);
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(12);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    await User.findByIdAndUpdate(userId, { password: hashedNewPassword });

    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while changing password',
      error: error.message
    });
  }
};

// Update profile image
const updateProfileImage = async (req, res) => {
  try {
    const { profileImage } = req.body;
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileImage },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Profile image updated successfully',
      data: {
        user: updatedUser.toJSON()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while updating profile image',
      error: error.message
    });
  }
};

// Delete account
const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const userId = req.user._id;

    // Verify password before deletion
    const user = await User.findById(userId);
    const isPasswordValid = await user.comparePassword(password);
    
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Password is incorrect'
      });
    }

    // Delete all quiz results associated with the user
    await UserQuizResult.deleteMany({ userId });

    // Delete user
    await User.findByIdAndDelete(userId);

    res.json({
      success: true,
      message: 'Account deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while deleting account',
      error: error.message
    });
  }
};

module.exports = {
  updateProfile,
  changePassword,
  updateProfileImage,
  deleteAccount
};
