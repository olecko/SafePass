// app.js

const express = require('express');
const cors = require('cors');
const app = express(); // Create the Express application

const virusTotalAPI = require('./routes/virusTotalAPI');
const ipinfoAPI = require('./routes/ipinfoAPI');
const shodanAPI = require('./routes/shodanAPI');
const dnsDumpsterAPI = require('./routes/dnsDumpsterAPI');

// Enable CORS to allow cross-origin requests from the frontend (if hosted on a different domain)
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// API routes
app.use('/api/virusTotal', virusTotalAPI);
app.use('/api/ipinfo', ipinfoAPI);
app.use('/api/shodan', shodanAPI);
app.use('/api/dnsDumpster', dnsDumpsterAPI);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`SafePass Backend Server running on port ${port}`);
});

module.exports = server; // Export the server instead of app

