var expect = require('chai').expect;
var compress = require('./1.5');

describe('1.5', function() {
  it('should compress the string', function() {
    expect(compress('')).to.equal('');
    expect(compress('a')).to.equal('a1');
    expect(compress('aabcccccddd')).to.equal('a2b1c5d3');
  });
});
