var expect = require('chai').expect;
var isSubtree = require('./4.8');

describe('4.8', function() {

  it('should work', function() {
    var a = {
      left: {},
      right: {
        left: {
          right: {
            left: {},
            right: {
              left: {}
            }
          }
        },
        right: {}
      }
    };

    var tree = {
      left: {},
      right: {
        left: {
          right: a
        }
      }
    };

    expect(isSubtree(tree, a)).to.be.true;
  });

});
