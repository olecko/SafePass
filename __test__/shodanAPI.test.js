const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const axios = require('axios');
const { describe, it } = require('mocha');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Shodan API Routes', function() {
  it('should scan Shodan information using Shodan API', async function() {
    this.timeout(100000); // Set the timeout to 100 seconds

    const ipAddress = '52.73.32.236'; // IP Address to Test

    const response = await axios.get(`https://api.shodan.io/shodan/host/{ip}?${encodeURIComponent(ipAddress)}`);

    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('matches');
    // Add more assertions based on the expected response
  });
});
