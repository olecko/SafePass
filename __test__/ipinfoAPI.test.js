const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Make sure to adjust the path to your app entry point
const { describe, it } = require('mocha');

const expect = chai.expect;

chai.use(chaiHttp);

describe('IPinfo API Routes',function() {
  it('should scan IP information using IPinfo API', function(done) {
    this.timeout(100000); // Set the timeout to 100 seconds

    const ipAddress = '52.3.242.228'; // Replace with the IP address you want to test

    chai
      .request(app)
      .get('/api/ipinfo/getIPInfo')
      .send({ ipAddress })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('ip');
        expect(res.body).to.have.property('hostname');
        // Add more assertions based on the response from the API

        done();
      });
  });
});


