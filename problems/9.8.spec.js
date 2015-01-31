var expect = require('chai').expect;
var centCombos = require('./9.8');

describe('9.8', function() {
  it('should count the number of cent combos', function() {
    var cents = 98;
    expect(centCombos(cents)).to.equal(213);
  });
});
