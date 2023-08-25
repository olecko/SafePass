const express = require('express');
const axios = require('axios');
const router = express.Router();
const userMiddleware = require('../middleware/userMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const virusTotalController = require('../controllers/virusTotalController');

require('dotenv').config();

// Define the route for scanning URLs
router.get('/scan', async (req, res) => {
  const url = req.query.url; // The URL to scan is now passed in the query string

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is missing' });
  }

  try {
    const scanURL = await virusTotalController.scan(url, process.env.VIRUSTOTAL_API_KEY);
    res.status(200).json(scanURL);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while scanning the URL' });
  }
});

router.use(() => {
  // The `authMiddleware` and `userMiddleware` functions are now wrapped in an anonymous function
  authMiddleware;
  userMiddleware.getUserById;
});

module.exports = router;
