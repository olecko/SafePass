// middleware/authMiddleware.js
function authMiddleware(req, res, next) {
  const userId = getTokenFromHeaders(req.headers.authorization);

  // Store the user ID in the request object for later use in route handlers
  req.userId = userId;

  next(); // Pass control to the next middleware or route handler
}

module.exports = authMiddleware;
