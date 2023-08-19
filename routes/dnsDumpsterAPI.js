// routes/dnsDumpsterAPI.js
const express = require('express');
const router = express.Router();

const dnsDumpsterController = require('../controllers/dnsDumpsterController');

module.exports = (app) => {
  app.get('/api/dnsdumpster/searchDomain', dnsDumpsterController.searchDomain);
};

