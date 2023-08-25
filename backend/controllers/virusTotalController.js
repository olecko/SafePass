const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const scanURL = async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is missing' });
  }

  try {
    const response = await axios.post(
      'https://www.virustotal.com/api/v3/urls',
      { url }, // Pass the URL to scan as a form parameter in the request body
      {
        headers: {
          'x-apikey': process.env.VIRUSTOTAL_API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded', // Set the correct content type for a form-urlencoded request
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from VirusTotal API' });
  }
};

module.exports = {
  scanURL,
};
