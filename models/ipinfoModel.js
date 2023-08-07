// models/ipinfoModel.js
// Add any additional logic or data processing related to the IPinfo API here if needed
// For this example, the model is a simple wrapper around the controller

const ipinfoController = require('../controllers/ipinfoController');

const getIPInfo = ipinfoController.getIPInfo;

module.exports = {
  getIPInfo,
};

