var expect = require('chai').expect;
var countStepCombos = require('./9.1');

describe('9.1', function() {
  it('should count all of the step combos', function() {
    expect(countStepCombos(5)).to.equal(13);
  });
});
