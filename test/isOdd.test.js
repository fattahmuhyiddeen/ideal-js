const chai = require('chai');
const { isOdd } = require('../index');
chai.should();

describe('Checking is odd function', () => {

  beforeEach(() => {
    console.log('do this before every test');
  });

  afterEach(async () => {
    // put async if we want to use await
    console.log('do this after every test');
  });

  it('returns false', async () => {
    // put async if we want to use await
    isOdd(2).should.be.false;
  });

  it('returns true', () => {
    isOdd(1).should.be.true;
  });

  it('returns false', () => {
    isOdd(4).should.equals(false);
  });
});
