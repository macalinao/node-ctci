var expect = require('chai').expect;
var doubleToBin = require('./5.2');

describe('5.2', function() {

  it('should accurately depict the binary representation', function() {
    expect(doubleToBin(32.5)).to.equal('100000.1');
    expect(doubleToBin(32.0625)).to.equal('100000.0001');
    expect(doubleToBin(32.5625)).to.equal('100000.1001');
    expect(doubleToBin(17.5400390625)).to.equal('10001.1000101001');
  });

});
