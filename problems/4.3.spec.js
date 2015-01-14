var expect = require('chai').expect;
var createBinaryTree = require('./4.3');

describe('4.3', function() {

  it('should create a binary tree with minimal height', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var expected = {
      value: 4,
      left: {
        value: 2,
        left: {
          value: 1
        },
        right: {
          value: 3
        }
      },
      right: {
        value: 6,
        left: {
          value: 5
        },
        right: {
          value: 7
        }
      }
    };

    var tree = createBinaryTree(arr);

    expect(tree).to.eql(expected);
  });

});
