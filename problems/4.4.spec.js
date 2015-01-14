var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var createNodeList = require('./4.4');

describe('4.4', function() {

  it('should create the linked lists', function() {
    var tree = {
      left: {
        left: {
          left: {},
          right: {},
        },
        right: {}
      },
      right: {}
    };

    // yeah JS arrays are kinda like linked lists so yeah
    var expected = [
      [tree],
      [tree.left, tree.right],
      [tree.left.left, tree.left.right],
      [tree.left.left.left, tree.left.left.right]
    ];

    var lists = createNodeList(tree);
    expect(lists).to.eql(expected);
  });

});
