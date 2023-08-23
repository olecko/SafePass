// controllers/userController.js
function getUserProfile(req, res) {
  const userId = req.userId; // Access the user ID stored in the request object
  // Fetch user profile using the userId
  // Send response
}

function updateUserProfile(req, res) {
  const userId = req.userId; // Access the user ID stored in the request object
  // Update user profile using the userId
  // Send response
}

module.exports = {
  getUserProfile,
  updateUserProfile,
};
