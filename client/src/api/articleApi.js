const API_BASE_URL = 'http://localhost:5000/api';

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

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
};

export const articleApi = {
  list: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiCall(`/articles${query ? `?${query}` : ''}`);
  },
  get: async (id) => {
    return apiCall(`/articles/${id}`);
  },
  upload: async ({ json, imageBase64, imageExt }) => {
    return apiCall('/articles', {
      method: 'POST',
      body: JSON.stringify({ json, imageBase64, imageExt })
    });
  }
};

export default articleApi;


