import React, { useState } from 'react';
import '../styles/UserSettings.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profileDefault from '../assets/react.svg';

function UserSettings() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: '',
    email: 'john@example.com',
    profileImage: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    deleteAccountPassword: '',
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [profilePreview, setProfilePreview] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
        setUserData({ ...userData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = (e) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (userData.newPassword !== userData.confirmNewPassword) {
      toast.error('New passwords do not match');
      return;
    }
    if (!userData.currentPassword || !userData.newPassword) {
      toast.error('Please fill all password fields');
      return;
    }
    toast.success('Password changed successfully!');
    setUserData({ ...userData, currentPassword: '', newPassword: '', confirmNewPassword: '' });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (!userData.deleteAccountPassword) {
      toast.error('Please enter your password');
      return;
    }
    setShowDeleteConfirm(true);
  };

  const confirmDeleteAccount = () => {
    setShowDeleteConfirm(false);
    toast.success('Account deleted (demo only)');
    setUserData({ ...userData, deleteAccountPassword: '' });
  };

  return (
    <div className="settings-container">
      <ToastContainer />
      <h1 className="settings-title">Settings</h1>
      <form className="settings-form" onSubmit={updateProfile}>
        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img
              src={profilePreview || userData.profileImage || profileDefault}
              alt="Profile"
              className="profile-pic"
            />
            <label className="upload-btn">
              Change Photo
              <input type="file" accept="image/*" onChange={handleProfileImageChange} style={{ display: 'none' }} />
            </label>
          </div>
          <div className="profile-fields">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" name="age" value={userData.age} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
            </div>
            <button className="btn" type="submit">Update Profile</button>
          </div>
        </div>
      </form>
      <form className="settings-form" onSubmit={changePassword}>
        <h2 className="section-title">Change Password</h2>
        <div className="form-group">
          <label>Current Password</label>
          <input type="password" name="currentPassword" value={userData.currentPassword} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" name="newPassword" value={userData.newPassword} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input type="password" name="confirmNewPassword" value={userData.confirmNewPassword} onChange={handleInputChange} />
        </div>
        <button className="btn" type="submit">Change Password</button>
      </form>
      <form className="settings-form" onSubmit={handleDeleteAccount}>
        <h2 className="section-title">Delete Account</h2>
        <div className="form-group">
          <label>Enter Password</label>
          <input type="password" name="deleteAccountPassword" value={userData.deleteAccountPassword} onChange={handleInputChange} />
        </div>
        <button className="btn btn-danger" type="submit">Delete Account</button>
      </form>
      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete your account?</h3>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={confirmDeleteAccount}>Yes, Delete</button>
              <button className="btn" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSettings; 