// routes/ipinfoAPI.js
const express = require('express');
const router = express.Router();

const ipinfoController = require('../controllers/ipinfoController.js');

module.exports = (app) => {
  app.get('/api/ipinfo/getIPInfo', ipinfoController.getIPInfo);
};
;

