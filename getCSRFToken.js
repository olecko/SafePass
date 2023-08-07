const axios = require('axios');

async function getCSRFToken() {
  try {
    const response = await axios.get('https://dnsdumpster.com/');
    const csrfToken = response.headers['set-cookie'][0].split(';')[0].split('=')[1];
    return csrfToken;
  } catch (error) {
    console.error('Failed to obtain CSRF token:', error.message);
    return null;
  }
}

// Usage
getCSRFToken().then((csrfToken) => {
  console.log('DNSDumpster CSRF Token:', csrfToken);
});

