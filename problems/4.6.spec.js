var expect = require('chai').expect;
var nextNode = require('./4.6');

describe('4.6', function() {

  it('should find the next node', function() {
    var a = {};
    var b = {
      left: {
        right: {
          right: {
            right: {
              right: a
            }
          }
        }
      }
    };

    var tree = {
      left: {
        right: {
          left: b
        }
      },
      right: {}
    };

    function setParents(node, parent) {
      node.parent = parent;
      if (node.left) setParents(node.left, node);
      if (node.right) setParents(node.right, node);
    }
    setParents(tree, null);

    expect(nextNode(a)).to.equal(b);
  });

});
