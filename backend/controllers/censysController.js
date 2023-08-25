const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const search = async (query) => {
  try {
    const censysId = process.env.CENSYS_API_ID;
    const censysSecret = process.env.CENSYS_API_SECRET;

    // Generate the authorization token
    const auth = Buffer.from(`${censysId}:${censysSecret}`).toString('base64');
    const headers = {
      'Authorization': `Basic ${auth}`,
    };

    // Make a GET request to Censys API
    const response = await axios.get(`https://search.censys.io/api/v1/data`, {
      params: {
        q: query,
      },
      headers: headers,
    });

    const data = response.data;

    // Process and use the retrieved data as needed

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while fetching data from Censys API');
  }
};

module.exports = {
  search,
};

