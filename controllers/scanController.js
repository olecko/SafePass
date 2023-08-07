// controllers/scanController.js
const axios = require('axios');
const db = require('../db');

// Your API keys for the external APIs
const VIRUSTOTAL_API_KEY = 'e896c7935456c0176cf43d3430bd1dc1e0303e04d9da69a9034f2145070b2cf6';
const IPINFO_API_TOKEN = '5ca597fbc8c8b5';
const SHODAN_API_KEY = '0OCQpySvCPxGFruAusThNIGUgO6RxHbd';
const DNSDUMPSTER_API_KEY = 'YOUR_DNSDUMPSTER_API_KEY';
// Add other API keys here

// Function to scan a URL using VirusTotal API
const scanURL = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is missing' });
  }

  try {
    // Make API request to VirusTotal
    const response = await axios.post(
      `https://www.virustotal.com/api/v3/scan`,
      { url },
      { headers: { 'x-apikey': e896c7935456c0176cf43d3430bd1dc1e0303e04d9da69a9034f2145070b2cf6 } }
    );

    // Save scan results to the database (You need to create the 'scan_results' table in MySQL)
    const { data } = response;
    const insertQuery = `
      INSERT INTO scan_results (url, attribute1, attribute2)
      VALUES (?, ?, ?)
    `;
    const values = [url, data.attribute1, data.attribute2]; // Adjust based on the actual response data

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error saving scan result to the database:', err);
        return res.status(500).json({ error: 'Failed to save scan result' });
      }

      return res.json({ message: 'Scan successful', data });
    });
  } catch (error) {
    console.error('Error while scanning URL:', error);
    return res.status(500).json({ error: 'Failed to scan URL' });
  }
};

// Function to receive details about IP address using IPinfo API
const ipDetails = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'url address is missing' });
  }

  try {
    // Make API request to IPinfo
    const response = await axios.post(
      `https://www.virustotal.com/api/v3/scan`,
      { url },
      { headers: { 'x-apitoken': 5ca597fbc8c8b5 } }
    );

    // Save results to the database (You need to create the 'scan_results' table in MySQL)
    const { data } = response;
    const insertQuery = `
      INSERT INTO search_results (ip, attribute1, attribute2)
      VALUES (?, ?, ?)
    `;
    const values = [ip, data.attribute1, data.attribute2]; // Adjust based on the actual response data

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error saving scan result to the database:', err);
        return res.status(500).json({ error: 'Failed to save scan result' });
      }

      return res.json({ message: 'IP address info found', data });
    });
  } catch (error) {
    console.error('Error while seeking ip address info:', error);
    return res.status(500).json({ error: 'Failed to get IP info' });
  }
};

// Function to search for services using Shodan API
const search = async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'url address is missing' });
  }

  try {
    // Make API request to Shodan
    const response = await axios.post(
      `https://www.virustotal.com/api/v3/scan`,
      { url },
      { headers: { 'x-apikey': 0OCQpySvCPxGFruAusThNIGUgO6RxHbd } }
    );

    // Save results to the database (You need to create the 'search_results' table in MySQL)
    const { data } = response;
    const insertQuery = `
      INSERT INTO search_results (url, attribute1, attribute2)
      VALUES (?, ?, ?)
    `;
    const values = [url, data.attribute1, data.attribute2]; // Adjust based on the actual response data

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error saving search result to the database:', err);
        return res.status(500).json({ error: 'Failed to save search results' });
      }

      return res.json({ message: 'search services not found', data });
    });
  } catch (error) {
    console.error('Error while searching device/service:', error);
    return res.status(500).json({ error: 'Failed to search device' });
  }
};

// Function to looks up DNS record of Domain  using DNSDumpster API
const dnsLookup = async (req, res) => {
  const { domain } = req.body;
  if (!domain) {
    return res.status(400).json({ error: 'domain name is missing' });
  }

  try {
    // Make API request to DNSDumpster
    const response = await axios.post(
      `https://www.virustotal.com/api/v3/scan`,
      { domain },
      { headers: { 'x-apikey': DNSDUMPSTER_API_KEY } }
    );

    // Save results to the database (You need to create the 'dns_results' table in MySQL)
    const { data } = response;
    const insertQuery = `
      INSERT INTO dns_results (domain, attribute1, attribute2)
      VALUES (?, ?, ?)
    `;
    const values = [domain, data.attribute1, data.attribute2]; // Adjust based on the actual response data

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error saving dns record result to the database:', err);
        return res.status(500).json({ error: 'Failed to save dns result' });
      }

      return res.json({ message: 'DNS record info found', data });
    });
  } catch (error) {
    console.error('Error while looking for dsn record info:', error);
    return res.status(500).json({ error: 'Failed to get dns record info' });
  }
};

// Function to get recent scan results from the database
const getRecentScans = (req, res) => {
  // Fetch recent scan results from the database
  const selectQuery = `
    SELECT * FROM scan_results
    ORDER BY scan_date DESC
    LIMIT 10
  `;

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching recent scan results:', err);
      return res.status(500).json({ error: 'Failed to fetch scan results' });
    }

    return res.json(results);
  });
};

module.exports = {
  scanURL,
  getRecentScans,
};

