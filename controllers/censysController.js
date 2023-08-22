const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const search = async (req, res) => {
  const results = await censys.search({ query: req.query.query });

  if (!results) {
    return res.status(404).json({ error: 'No results found' });
  }
    try {
    const results = await censys.search({ query: req.query.query });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  search,
};
