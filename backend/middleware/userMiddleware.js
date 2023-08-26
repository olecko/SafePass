const User = require('../models/user.model');

async function getUserById(req, res, next) {
  try {
    const userId = req.userId; // Assuming you've stored user ID in the request object
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = user; // Attach user to request object for later use
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getUserById,
};

