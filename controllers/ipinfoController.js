const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.IPINFO_API_KEY;

module.exports = (req, res) => {
  const ipAddress = req.query.ipAddress;

  // Get the IP information from the IPinfo API
  const url = `https://api.ipinfo.io/v1/${ipAddress}?key=${apiKey}`;
  const request = new Request(url);
  request.get();

  request.on('response', (response) => {
    if (response.statusCode === 200) {
      const ipInfo = JSON.parse(response.text);
      res.json(ipInfo);
    } else {
      res.status(response.statusCode).send('Error getting IP information');
    }
  });

  request.on('error', (err) => {
    res.status(500).send('Error getting IP information');
  });
};
;
