// routes/censysAPI.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

router.get('/search', async (req, res) => {
  try {
    const censysId = process.env.CENSYS_API_ID;
    const censysSecret = process.env.CENSYS_API_SECRET;
    const url = req.query.url;

    // Generate the authorization token
    const auth = Buffer.from(`${censysId}:${censysSecret}`).toString('base64');
    const headers = {
      'Authorization': `Basic ${auth}`,
    };

    // Make a GET request to Censys API
    const response = await axios.get(`https://search.censys.io/api/v1/data`, {
      params: {
        q: url,
      },
      headers: headers,
    });

    const data = response.data;

    // Process and use the retrieved data as needed

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

