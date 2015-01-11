var expect = require('chai').expect;
var rotate = require('./1.6');

describe('1.6', function() {

  it('should rotate the matrix', function() {

    var matrix = [
      [1, 5, 2, 3],
      [1, 7, 3, 7],
      [9, 3, 4, 2],
      [1, 7, 3, 4]
    ];

    var expected = [
      [1, 9, 1, 1],
      [7, 3, 7, 5],
      [3, 4, 3, 2],
      [4, 2, 7, 3]
    ];

    expect(rotate(matrix)).to.eql(expected);
  });

  it('should rotate an odd matrix', function() {

    var matrix = [
      [1, 5, 2, 3, 1],
      [1, 7, 3, 7, 6],
      [9, 3, 4, 2, 1],
      [1, 7, 3, 4, 8],
      [2, 4, 2, 5, 9]
    ];

    var expected = [
      [2, 1, 9, 1, 1],
      [4, 7, 3, 7, 5],
      [2, 3, 4, 3, 2],
      [5, 4, 2, 7, 3],
      [9, 8, 1, 6, 1]
    ];

    expect(rotate(matrix)).to.eql(expected);
  });


});
