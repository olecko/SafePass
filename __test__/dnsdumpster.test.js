const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { describe, it } = require('mocha');
const axios = require('axios'); // Import axios

const expect = chai.expect;

chai.use(chaiHttp);

describe('DNSDumpster API Routes', function() {
  it('should search domain using DNSDumpster API', function(done) {
    this.timeout(100000); // Set the timeout to 100 seconds

    const domain = 'google.com';

    chai
      .request(app)
      .get('/api/dnsdumpster/searchDomain')
      .send({ domain })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

