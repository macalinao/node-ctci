var expect = require('chai').expect;
var commonAncestor = require('./4.7');

describe('4.7', function() {

  it('should find the common ancestor', function() {
    var a = {};
    var b = {};

    var ancestor = {
      left: {
        right: {
          left: {},
          right: {
            left: a
          }
        }
      },
      right: {
        left: {},
        right: {
          left: {
            left: {
              left: {
                right: b
              }
            }
          }
        }
      }
    };

    var tree = {
      left: {
        right: {
          left: ancestor,
          right: {}
        }
      },
      right: {}
    };

    expect(commonAncestor(tree, a, b)).to.equal(ancestor);
  });

  it('should return null if no common ancestor', function() {
    var a = {};
    var b = {};

    var tree = {
      left: {
        right: a
      }
    };

    expect(commonAncestor(tree, a, b)).to.be.null;
  });

});
