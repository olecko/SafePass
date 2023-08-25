const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const apikey = process.env.VIRUSTOTAL_API_KEY;

async function scanURL(url, apikey) {
  const options = {
    url: `https://www.virustotal.com/api/v3/url/scan?apikey=${apikey}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  };

  const response = await axios(options);

  if (response.statusCode === 200) {
    return response.body;
  } else {
    throw new Error(`VirusTotal API returned status code ${response.statusCode}`);
  }
}
