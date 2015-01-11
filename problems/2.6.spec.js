var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var findLoop = require('./2.6');

describe('2.6', function() {
  it('should find the loop', function() {
    var list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
    list.head.next.next.next.next.next.next = list.head.next.next.next;
    expect(findLoop(list)).to.equal(3);
  });

  it('should find the loop on a big list', function() {
    var arr = [];
    for (var i = 0; i < 1000; i++) {
      arr.push(i * 23);
    }
    var list = new LinkedList(arr);

    var node = list.head;
    for (var i = 0; i < 999; i++) {
      node = node.next;
    }
    node.next = list.head.next.next.next;

    expect(findLoop(list)).to.equal(3);
  });
});
