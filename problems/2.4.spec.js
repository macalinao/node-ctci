var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var partition = require('./2.4');

describe('2.4', function() {
  it('should not move elements if only before', function() {
    var list = new LinkedList([5, 6, 7, 8, 1, 2, 3, 4]);
    var expected = new LinkedList([5, 6, 7, 8, 1, 2, 3, 4]);
    expect(partition(list, 9)).to.eql(expected.head);
  });

  it('should not move elements if only after', function() {
    var list = new LinkedList([5, 6, 7, 8, 1, 2, 3, 4]);
    var expected = new LinkedList([5, 6, 7, 8, 1, 2, 3, 4]);
    expect(partition(list, 0)).to.eql(expected.head);
  });

  it('should move elements before and after', function() {
    var list = new LinkedList([5, 6, 7, 8, 1, 2, 3, 4]);
    var expected = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(partition(list, 4.5)).to.eql(expected.head);
  });
});
