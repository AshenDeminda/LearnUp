import React, { useState, useEffect } from 'react';
import '../styles/UserSettings.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/AuthContext';
import { userApi } from '../api/userApi';
import profileDefault from '../assets/react.svg';

function UserSettings() {
  const { user, updateUser } = useAuth();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    age: user?.age || '',
    email: user?.email || '',
    profileImage: user?.profileImage || '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    deleteAccountPassword: '',
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [profilePreview, setProfilePreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Update form data when user changes
  useEffect(() => {
    if (user) {
      setUserData(prev => ({
        ...prev,
        name: user.name || '',
        age: user.age || '',
        email: user.email || '',
        profileImage: user.profileImage || ''
      }));
    }
  }, [user]);

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

  const updateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await userApi.updateProfile({
        name: userData.name,
        age: userData.age,
        email: userData.email
      });
      
      updateUser(response.data.user);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    if (userData.newPassword !== userData.confirmNewPassword) {
      toast.error('New passwords do not match');
      return;
    }
    if (!userData.currentPassword || !userData.newPassword) {
      toast.error('Please fill all password fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await userApi.changePassword({
        currentPassword: userData.currentPassword,
        newPassword: userData.newPassword
      });
      
      toast.success('Password changed successfully!');
      setUserData({ ...userData, currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (error) {
      toast.error(error.message || 'Failed to change password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    if (!userData.deleteAccountPassword) {
      toast.error('Please enter your password');
      return;
    }
    setShowDeleteConfirm(true);
  };

  const confirmDeleteAccount = async () => {
    setIsLoading(true);
    
    try {
      await userApi.deleteAccount(userData.deleteAccountPassword);
      setShowDeleteConfirm(false);
      toast.success('Account deleted successfully');
      // Redirect to signin page after account deletion
      window.location.href = '/signin';
    } catch (error) {
      toast.error(error.message || 'Failed to delete account');
    } finally {
      setIsLoading(false);
    }
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
            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
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
        <button className="btn" type="submit" disabled={isLoading}>
          {isLoading ? "Changing..." : "Change Password"}
        </button>
      </form>
      <form className="settings-form" onSubmit={handleDeleteAccount}>
        <h2 className="section-title">Delete Account</h2>
        <div className="form-group">
          <label>Enter Password</label>
          <input type="password" name="deleteAccountPassword" value={userData.deleteAccountPassword} onChange={handleInputChange} />
        </div>
        <button className="btn btn-danger" type="submit" disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete Account"}
        </button>
      </form>
      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete your account?</h3>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="btn btn-danger" onClick={confirmDeleteAccount} disabled={isLoading}>
                {isLoading ? "Deleting..." : "Yes, Delete"}
              </button>
              <button className="btn" onClick={() => setShowDeleteConfirm(false)} disabled={isLoading}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSettings; 