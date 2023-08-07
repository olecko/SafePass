// models/virusTotalModel.js
// Add any additional logic or data processing related to the VirusTotal API here if needed
// For this example, the model is a simple wrapper around the controller

const virusTotalController = require('../controllers/virusTotalController');

const scanURL = virusTotalController.scanURL;

module.exports = {
  scanURL,
};

