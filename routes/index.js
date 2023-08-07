// routes/index.js
const express = require('express');
const router = express.Router();

// Import controller functions
const { scanURL, getRecentScans } = require('../controllers/virusTotalController');
const { getIPInfo } = require('../controllers/ipinfoController');
const { getShodanData } = require('../controllers/shodanController');
const { getDNSRecords } = require('../controllers/dnsrecordsController');

// Routes
router.post('/scan', scanURL);
router.get('/recentScans', getRecentScans);

module.exports = router;

