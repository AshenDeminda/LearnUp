import React, { useState } from 'react';
import '../styles/UserSettings.css';

function UserSettings() {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    profileImage: '/default-avatar.png',
    bio: 'Software Developer',
    location: 'New York, USA'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Settings updated:', userData);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>User Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-sidebar">
          <div className="user-profile">
            <div className="profile-image-container">
              <img src={userData.profileImage} alt="Profile" className="profile-image" />
              <button className="change-photo-btn">Change Photo</button>
            </div>
            <h2>{userData.fullName}</h2>
            <p>{userData.email}</p>
          </div>
          <nav className="settings-nav">
            <button className="nav-item active">Profile</button>
            <button className="nav-item">Security</button>
            <button className="nav-item">Preferences</button>
            <button className="nav-item">Notifications</button>
          </nav>
        </div>

        <div className="settings-main">
          <form onSubmit={handleSubmit} className="settings-form">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={userData.fullName}
                  onChange={(e) => setUserData({...userData, fullName: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={userData.bio}
                  onChange={(e) => setUserData({...userData, bio: e.target.value})}
                  className="form-input"
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={userData.location}
                  onChange={(e) => setUserData({...userData, location: e.target.value})}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Password</h3>
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" className="form-input" />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input type="password" className="form-input" />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" className="form-input" />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">Save Changes</button>
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSettings; 