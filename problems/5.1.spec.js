var expect = require('chai').expect;
var insertBits = require('./5.1');

describe('5.1', function() {

  it('should insert the bits with offset', function() {
    var n = 0x900;
    var m = 0xf;
    var expected = 0x9f0;
    expect(insertBits(n, m, 4, 7)).to.equal(expected);
  });

  it('should insert the bits', function() {
    var n = 0x900;
    var m = 0xf0;
    var expected = 0x9f0;
    expect(insertBits(n, m, 0, 7)).to.equal(expected);
  });

});
