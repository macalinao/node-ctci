var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var deleteNode = require('./2.3');

describe('2.3', function() {
  it('should work', function() {
    var arr = [4, 2, 5, 5, 8, 13, 17, 13, 9, 0, 2];
    var expected = [4, 2, 5, 5, 8, 17, 13, 9, 0, 2];
    var list = new LinkedList(arr);
    deleteNode(list.head.next.next.next.next.next);
    expect(list.toArray()).to.eql(expected);
  });
});
