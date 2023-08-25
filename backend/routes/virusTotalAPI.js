const express = require('express');
const router = express.Router();

// Import the controller for virusTotal API
const virusTotalController = require('../controllers/virusTotalController');

// Define the route for scanning URLs
router.get('/scan', virusTotalController.scanURL);

module.exports = router;;
