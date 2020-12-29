const chai = require('chai');
const { getURL } = require('../index');
chai.should();

describe('getURL function', () => {

  it('should return url', () => {
    getURL().should.equals('url');
  });
});
