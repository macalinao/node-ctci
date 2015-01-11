var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var add = require('./2.5');

describe('2.5', function() {
  it('should add numbers of equal length', function() {
    var a = new LinkedList([5, 9, 2]);
    var b = new LinkedList([7, 1, 6]);
    var expected = new LinkedList([2, 1, 9]);
    expect(add(a, b)).to.eql(expected.head);
  });
  it('should add numbers of inequal length', function() {
    var a = new LinkedList([5, 9, 2, 1]);
    var b = new LinkedList([7, 1, 6]);
    var expected = new LinkedList([2, 1, 9, 1]);
    expect(add(a, b)).to.eql(expected.head);
  });
});
