// models/shodanModel.js
// Add any additional logic or data processing related to the Shodan API here if needed
// For this example, the model is a simple wrapper around the controller

const shodanController = require('../controllers/shodanController');

const getShodanData = shodanController.getShodanData;

module.exports = {
  getShodanData,
};

