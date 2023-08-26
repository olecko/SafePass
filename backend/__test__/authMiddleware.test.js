const chai = require('chai');
const expect = chai.expect;
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library

describe('Authentication Middleware', () => {
  it('should add userId to request object when valid token is provided', () => {
    const validToken = jwt.sign({ userId: 'YOUR_USER_ID' }, process.env.JWT_SECRET_KEY);

    const req = {
      headers: {
        authorization: `Bearer ${validToken}`,
      },
    };

    const res = {};
    const next = () => {};

    authMiddleware(req, res, next);

    // Expect userId to be added to the request object
    expect(req.userId).to.exist;
  });

  it('should not add userId to request object when invalid token is provided', () => {
    const invalidToken = 'INVALID_TOKEN';

    const req = {
      headers: {
        authorization: `Bearer ${invalidToken}`,
      },
    };

    const res = {};
    const next = () => {};

    authMiddleware(req, res, next);

    // Expect userId to be undefined in the request object
    expect(req.userId).to.be.null;
  });
});
