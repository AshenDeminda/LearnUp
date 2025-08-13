const mongoose = require('mongoose');
require('dotenv').config();

// Test MongoDB connection and image update
async function testImageUpdate() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Get User model
    const User = require('./src/models/User');
    
    // Find a test user
    const testUser = await User.findOne();
    if (!testUser) {
      console.log('No users found in database');
      return;
    }
    
    console.log('Test user found:', testUser.name);
    console.log('Current profile image:', testUser.profileImage);
    
    // Test updating profile image
    const testImageData = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjgwIiBmaWxsPSIjMDA3Y2JkIi8+PHRleHQgeD0iMTAwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRlc3Q8L3RleHQ+PC9zdmc+';
    
    const updatedUser = await User.findByIdAndUpdate(
      testUser._id,
      { profileImage: testImageData },
      { new: true }
    );
    
    console.log('Profile image updated successfully');
    console.log('New profile image length:', updatedUser.profileImage.length);
    console.log('New profile image starts with:', updatedUser.profileImage.substring(0, 50));
    
    // Verify the update
    const verifyUser = await User.findById(testUser._id);
    console.log('Verification - Profile image length:', verifyUser.profileImage.length);
    
    console.log('Test completed successfully!');
    
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

testImageUpdate();
