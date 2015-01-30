var expect = require('chai').expect;
var fill = require('./9.7');

describe('9.7', function() {
  it('this is my canvas', function() {

    var pic = [
      [1, 0, 0, 3, 0],
      [1, 3, 1, 3, 0],
      [0, 1, 1, 1, 0],
      [0, 2, 2, 1, 0],
      [0, 0, 2, 0, 0],
    ];

    var filled = [
      [1, 0, 0, 3, 0],
      [1, 3, 3, 3, 0],
      [0, 3, 3, 3, 0],
      [0, 2, 2, 3, 0],
      [0, 0, 2, 0, 0],
    ];

    expect(fill(pic, 2, 2, 3)).to.eql(filled);

  });
});
