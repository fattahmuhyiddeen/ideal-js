const chai = require('chai');
const { getArray } = require('../index');
chai.should();

describe('getArray function', () => {

  it('should return correct array structure', () => {
    getArray().should.eql([{ a: 1 }, { b: 2 }]);
  });
});
