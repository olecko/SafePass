const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const searchDomain = async (req, res) => {
  const domain = req.query.domain;
  if (!domain) {
    return res.status(400).json({ error: 'Domain parameter is missing' });
  }

  try {
    const response = await axios.get(`https://dnsdumpster.com`, {
      params: {
        'targetip': domain,
      },
      headers: {
        'Cookie': `csrftoken=${process.env.DNSDUMPSTER_CSRF_TOKEN};`,
      },
    });

    // Process the response and extract the required data
    // Your logic to handle the response data goes here

    res.json(response.data); // Replace this with your processed data
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from DNSDumpster API' });
  }
};

module.exports = {
  searchDomain,
};

