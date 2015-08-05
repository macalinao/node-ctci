var expect = require('chai').expect;
var isPermutation = require('./1.3');

describe('1.3', function() {
  it('should check permutations', function() {
    expect(isPermutation('asdf', 'fdsa')).to.be.true;
    expect(isPermutation('asdf', 'fdsaa')).to.be.false;
    expect(isPermutation('asdf', 'fdsf')).to.be.false;
  });
});

