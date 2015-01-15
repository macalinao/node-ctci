var expect = require('chai').expect;
var swapBits = require('./5.6');

describe('5.6', function() {

  it('should swap the bits', function() {
   expect(swapBits(0x111)).to.equal(0x222);
   expect(swapBits(0x444)).to.equal(0x888);
  });

});
