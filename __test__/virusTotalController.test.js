const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { describe, it } = require('mocha');

const expect = chai.expect;

chai.use(chaiHttp);

describe('virusTotalController', () => {
  it('should return scan results for a valid URL', (done) => {
    const validUrl = 'https://thetrumpet.ng';

    chai
      .request(app)
      .get(`/api/virusTotal/scan?url=${encodeURIComponent(validUrl)}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('type').to.equal('analysis');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data.links).to.have.property('self');
        // Add more assertions based on the response from the API

        done();
      });
  });
});

