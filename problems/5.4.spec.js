var expect = require('chai').expect;
var fn = require('./5.4');

describe('5.4', function() {

  it('should be accurate', function() {

    expect(fn(Math.pow(2, 5))).to.be.true;
    expect(fn(Math.pow(2, 3))).to.be.true;
    expect(fn(Math.pow(2, 2))).to.be.true;
    expect(fn(Math.pow(2, 1))).to.be.true;
    expect(fn(Math.pow(2, 7))).to.be.true;
    expect(fn(Math.pow(2, 8))).to.be.true;
    expect(fn(Math.pow(2, 8) - 1)).to.be.false;
  });

});
