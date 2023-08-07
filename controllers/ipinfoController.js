// controllers/ipinfoController.js
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const getIPInfo = async (req, res) => {
  const ipAddress = req.params.ipAddress;
  if (!ipAddress) {
    return res.status(400).json({ error: 'IP address parameter is missing' });
  }

  try {
    const response = await axios.get(`http://ipinfo.io/${encodeURIComponent(ipAddress)}`, {
	  headers: {
	  'x-apikey': process.env.IPINFO_API_TOKEN,
	  },
     });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from IPinfo API' });
  }
};

module.exports = {
  getIPInfo,
};

