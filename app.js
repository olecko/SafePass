// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); // Create the Express application


const virusTotalAPI = require('./routes/virusTotalAPI');
const ipinfoAPI = require('./routes/ipinfoAPI');
const ipinfoRoutes = require('./routes/ipinfoAPI');
const shodanAPI = require('./routes/shodanAPI');
const dnsdumpsterRoutes = require('./routes/dnsDumpsterAPI');

// Enable CORS to allow cross-origin requests from the frontend (if hosted on a different domain)
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// API routes
app.use('/api/virusTotal', virusTotalAPI);
app.use('/api/ipinfo', ipinfoRoutes);
app.use('/api/shodan', shodanAPI);
app.use('/api/dnsdumpster', dnsdumpsterRoutes);

const port = process.env.PORT || 5005;
const server = app.listen(port, () => {
  console.log(`SafePass Backend Server running on port ${port}`);
});

module.exports = server; // Export the server instead of app
