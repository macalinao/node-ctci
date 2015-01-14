var expect = require('chai').expect;
var isBST = require('./4.5');

describe('4.5', function() {

  it('should correctly check BSTs', function() {
    var bst = {
      value: 5,
      left: {
        value: 3
      },
      right: {
        value: 7
      }
    };
    expect(isBST(bst)).to.be.true;
  });

  it('should correctly return false for non bsts', function() {
    var bst = {
      value: 5,
      left: {
        value: 3
      },
      right: {
        value: 1
      }
    };
    expect(isBST(bst)).to.be.true;
  });

});
