const jwt = require('jsonwebtoken');
require('dotenv').config();

const getTokenFromHeaders = (req) => {
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    return authorizationHeader.substring(7); // Remove 'Bearer ' to get just the token
  }
  return null;
};

const authMiddleware = (req, res, next) => {
  const token = getTokenFromHeaders(req);

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decodedToken.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  getTokenFromHeaders,
  authMiddleware,
};
