var expect = require('chai').expect;
var zero = require('./1.7');

describe('1.7', function() {

  it('should work on 1 element', function() {

    expect(zero([
      [1]
    ])).to.eql([
      [1]
    ]);

    expect(zero([
      [0]
    ])).to.eql([
      [0]
    ]);

  });

  it('should zero columns/rows in a matrix', function() {

    var matrix = [
      [1, 0, 2, 3],
      [1, 6, 2, 3],
      [8, 7, 35, 3],
      [8, 4, 33, 2]
    ];

    var expected = [
      [0, 0, 0, 0],
      [1, 0, 2, 3],
      [8, 0, 35, 3],
      [8, 0, 33, 2]
    ];

    expect(zero(matrix)).to.eql(expected);
  });

  it('should zero columns/rows in a matrix with different dimensions', function() {

    var matrix = [
      [1, 0, 2, 3],
      [1, 6, 2, 3],
      [8, 7, 35, 3],
      [8, 4, 33, 2],
      [8, 4, 33, 2],
      [8, 4, 33, 2],
      [8, 4, 33, 2]
    ];

    var expected = [
      [0, 0, 0, 0],
      [1, 0, 2, 3],
      [8, 0, 35, 3],
      [8, 0, 33, 2],
      [8, 0, 33, 2],
      [8, 0, 33, 2],
      [8, 0, 33, 2]
    ];

    expect(zero(matrix)).to.eql(expected);
  });
});
