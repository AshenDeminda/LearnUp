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

// Quiz API calls
export const quizApi = {
  // Save quiz result
  saveQuizResult: async (quizData) => {
    return apiCall('/quizzes/results', {
      method: 'POST',
      body: JSON.stringify(quizData),
    });
  },

  // Get user's quiz results
  getUserQuizResults: async () => {
    return apiCall('/quizzes/results');
  },

  // Get specific quiz result
  getQuizResult: async (quizId) => {
    return apiCall(`/quizzes/results/${quizId}`);
  },

  // Get user's best scores
  getUserBestScores: async () => {
    return apiCall('/quizzes/best-scores');
  },
};

export default quizApi;
