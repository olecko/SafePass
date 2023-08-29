// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authMiddleware(req, res, next) {
  let userId = null;
  userId = getTokenFromHeaders(req.headers.authorization);
  req.userId = userId || null;

  const secretKey = process.env.JWT_SECRET_KEY;
  if (!secretKey) {
    throw new Error('JWT_SECRET_KEY environment variable is not defined');
  }

  try {
    const token = getTokenFromHeaders(req.headers.authorization); // Get token from headers
    if (!token) {
      throw new Error('Token is missing');
    }

    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId; // Set userId in the request object
    next(); // Call the next middleware
  } catch (error) {
    // Handle invalid token gracefully
    req.userId = null; // Set userId to null
    next(); // Call the next middleware
  }
}

function getTokenFromHeaders(authorizationHeader) {
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.substring(7);
    return token;
  }
  return null;
}

module.exports = authMiddleware;

