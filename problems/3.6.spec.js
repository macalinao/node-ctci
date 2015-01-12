var expect = require('chai').expect;
var sortStack = require('./3.6');

describe('3.6', function() {
  it('should sort a sorted array', function() {
    var sorted = sortStack([5, 4, 3, 2, 1]);
    expect(sorted).to.eql([5, 4, 3, 2, 1]);
  });
  it('should sort a reverse sorted array', function() {
    var sorted = sortStack([1, 2, 3, 4, 5]);
    expect(sorted).to.eql([5, 4, 3, 2, 1]);
  });
  it('should sort a randomly sorted array', function() {
    var sorted = sortStack([2, 3, 5, 4, 1]);
    expect(sorted).to.eql([5, 4, 3, 2, 1]);
  });
});
