const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');
const axios = require('axios');
const app = require('../app');
const { describe, it } = require('mocha');

const expect = chai.expect;

// Load environment variables from .env file
require('dotenv').config();

chai.use(chaiHttp);

describe('Censys API', function() {
  it('should be able to scan a URL', async function() {
    this.timeout(100000);

    const url = 'thetrumpet.ng';

    try {
      const censysApiId = process.env.CENSYS_API_ID;
      const censysApiSecret = process.env.CENSYS_API_SECRET;

      const response = await axios.get('https://search.censys.io/api/v1/data', {
        params: {
          q: url,
        },
        auth: {
          username: censysApiId,
          password: censysApiSecret,
        },
      });

      const data = response.data;

      // Your assertions and tests here...
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error('Response data:', error.response.data);
      }

      // Handle the error or assertions for a failed request
    }
  });
});

