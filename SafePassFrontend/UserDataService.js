import axios from 'axios';
import Constants from './Constants';

const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${BACKEND_SERVER_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUserProfile = async (userId, profileData) => {
  try {
    const response = await axios.put(`${BACKEND_SERVER_URL}/api/users/${userId}`, profileData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ... other user-related service functions ...

export default {
  getUserData,
  updateUserProfile,
  // ... other exported functions ...
};
