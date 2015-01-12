var expect = require('chai').expect;
var isBalanced = require('./4.1');

describe('4.1', function() {

  it('should handle single node', function() {
    expect(isBalanced({
      left: null,
      right: null
    })).to.be.true;
  });

  it('should handle node with one extra leaf', function() {
    expect(isBalanced({
      left: {},
      right: null
    })).to.be.true;
  });

  it('should return false on too much nesting', function() {
    expect(isBalanced({
      left: {
        left: {}
      },
      right: null
    })).to.be.false;
  });

  it('should handle a huge tree', function() {
    expect(isBalanced({
      left: {
        left: {
          left: {},
        },
        right: {
          right: {}
        }
      },
      right: {
        left: {
          left: {}
        },
        right: {
          left: {}
        }
      }
    })).to.be.true;
  });

  it('should handle a huge invalid tree', function() {
    expect(isBalanced({
      left: {
        left: {
          left: {},
        },
        right: {
          right: {}
        }
      },
      right: {
        left: {
          left: {}
        },
        right: {
          left: {
            right: {}
          },
          right: {}
        }
      }
    })).to.be.false;
  });

});
