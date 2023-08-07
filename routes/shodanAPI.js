// routes/shodanAPI.js
const express = require('express');
const router = express.Router();

const { getShodanData } = require('../controllers/shodanController');

router.post('/shodan', getShodanData);

module.exports = router;

