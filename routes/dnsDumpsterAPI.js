// routes/dnsDumpsterAPI.js
const express = require('express');
const router = express.Router();

const { searchDomain } = require('../controllers/dnsDumpsterController');

router.post('/dnsdumpster', searchDomain);

module.exports = router;

