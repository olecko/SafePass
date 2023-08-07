// routes/ipinfoAPI.js
const express = require('express');
const router = express.Router();

const { getIPInfo } = require('../controllers/ipinfoController');

router.post('/ipinfo', getIPInfo);

module.exports = router;

