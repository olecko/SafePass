// ShodanAPIController.js:
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const getShodanData = async (req, res) => {
  const ipAddress = req.params.ipAddress;
  if (!ipAddress) {
    return res.status(400).json({ error: 'IP address parameter is missing' });
  }

  try {
    const response = await axios.get(`https://api.shodan.io/shodan/host/{ip}?${encodeURIComponent(ipAddress)}`, {
      headers: {
        'x-apikey': process.env.SHODAN_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Shodan API' });
  }
};

module.exports = {
  getShodanData,
};

