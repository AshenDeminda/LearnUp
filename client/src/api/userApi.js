const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to make API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// User management API calls
export const userApi = {
  // Update user profile
  updateProfile: async (profileData) => {
    return apiCall('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },

  // Change password
  changePassword: async (passwordData) => {
    return apiCall('/users/password', {
      method: 'PUT',
      body: JSON.stringify(passwordData),
    });
  },

  // Update profile image
  updateProfileImage: async (imageData) => {
    return apiCall('/users/profile-image', {
      method: 'PUT',
      body: JSON.stringify(imageData),
    });
  },

  // Delete account
  deleteAccount: async (password) => {
    return apiCall('/users/account', {
      method: 'DELETE',
      body: JSON.stringify({ password }),
    });
  },
};

export default userApi;
