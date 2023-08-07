// models/dnsDumpsterModel.js
// Add any additional logic or data processing related to the DNSDumpster API here if needed
// For this example, the model is a simple wrapper around the controller

const dnsDumpsterController = require('../controllers/dnsDumpsterController');

const getDNSRecords = dnsDumpsterController.getDNSRecords;

module.exports = {
  getDNSRecords,
};

