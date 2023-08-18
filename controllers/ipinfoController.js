const IPinfoWrapper = require("node-ipinfo").IPinfoWrapper;
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// Create an instance of IPinfoWrapper with your IPinfo API token
const ipinfo = new IPinfoWrapper(process.env.IPINFO_API_TOKEN);

// Controller function to get IP information
const getIPInfo = async (req, res) => {
    const ipAddress = req.params.ipAddress;
    if (!ipAddress) {
        return res.status(400).json({ error: 'IP address parameter is missing' });
    }

    try {
        // Lookup the IP information asynchronously
   	const ipinfo = await ipinfo.lookupIp(ipAddress);

    	// Process the results and send them back
    	res.json(ipinfo);
    	} catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from IPinfo API' });
    }
};

module.exports = {
    getIPInfo,
};
