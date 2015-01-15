var expect = require('chai').expect;
var prevNextBin = require('./5.3');

describe('5.3', function() {

  it('should get the previous and next number', function() {
    expect(prevNextBin(0x10)).to.eql([0x08, 0x20]);
    expect(prevNextBin(0xe8b)).to.eql([0xe87, 0xe8d]);
  });

});
