var expect = require('chai').expect;
var findSums = require('./4.9');

describe('4.9', function() {

  it('should sum correctly', function() {
    var tree = {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 2
        },
        right: {
          value: 39
        }
      },
      right: {
        value: 5,
        left: {
          value: 1
        },
        right: {
          value: 4
        }
      }
    };

    expect(findSums(tree, 9)).to.eql([
      'root -> left -> left',
      'root -> right -> left'
    ]);

  });

  it('should return nothing if no sums', function() {
    var tree = {
      value: 3,
      left: {
        value: 4,
        left: {
          value: 2
        },
        right: {
          value: 39
        }
      },
      right: {
        value: 5,
        left: {
          value: 1
        },
        right: {
          value: 4
        }
      }
    };

    expect(findSums(tree, 1293)).to.eql([]);
  });

});
