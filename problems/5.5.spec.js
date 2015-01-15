var expect = require('chai').expect;
var countConvertBits = require('./5.5');

describe('5.5', function() {

  it('should count correctly', function() {
    expect(countConvertBits(31, 14)).to.equal(2);
    expect(countConvertBits(0xf, 0x8)).to.equal(3);
  });

});
