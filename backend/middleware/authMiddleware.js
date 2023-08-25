// middleware/authMiddleware.js
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
require('dotenv').config(); // Load environment variables

function authMiddleware(req, res, next) {
  const userId = getTokenFromHeaders(req.headers.authorization);

  // Store the user ID in the request object for later use in route handlers
  req.userId = userId;

  next(); // Pass control to the next middleware or route handler
}

function getTokenFromHeaders(authorizationHeader) {
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.substring(7);
    try {
      // Verify the token using the JWT secret key from .env
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      return decoded.userId;
    } catch (error) {
      // Return null if token is invalid
      return null;
    }
  }
  return null;
}

module.exports = authMiddleware;

