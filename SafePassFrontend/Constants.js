import axios from 'axios';

export const Constants = {
  CENSYS_API_URL: 'http://localhost:5005/api/censys/search',
  VIRUS_TOTAL_API_URL: 'http://localhost:5005/api/virusTotal/scan',
  BACKEND_SERVER_URL: 'http://localhost:5005',
};

// This is the environment variable that contains the JWT secret key  
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const getCensysData = async (query) => {
  try {
    const response = await axios.get(Constants.CENSYS_API_URL, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const scanURL = async (url) => {
  try {
    const response = await axios.get(Constants.VIRUS_TOTAL_API_URL, { params: { url } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default Constants;
