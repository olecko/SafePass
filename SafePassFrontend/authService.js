import { ExpoCrypto } from 'expo-crypto';
import axios from 'axios';
import { BACKEND_SERVER_URL, JWT_SECRET_KEY } from './Constants';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_SERVER_URL}/api/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      `${BACKEND_SERVER_URL}/api/auth/login`,
      { username, password }
    );
    const token = response.data.token;

    // Add code for JWT verification here
    const cryptoDigestAlgorithm = ExpoCrypto.CryptoDigestAlgorithm.SHA256;
    const secretKey = new TextEncoder().encode(JWT_SECRET_KEY);
    const tokenBytes = new TextEncoder().encode(token);
    const decodedToken = await verifyAsync(
      cryptoDigestAlgorithm,
      secretKey,
      tokenBytes
    );

    return decodedToken;
  } catch (error) {
    throw error;
  }
};

const authService = {
  loginUser,
  registerUser,
};

export default authService;
