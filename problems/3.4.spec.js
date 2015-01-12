var expect = require('chai').expect;
var hanoi = require('./3.4');

describe('3.4', function() {
  it('should solve the tower of hanoi', function() {
    var expected = [
      [],
      [],
      [5, 4, 3, 2, 1]
    ];
    expected[0].name = '0';
    expected[1].name = '1';
    expected[2].name = '2';
    expect(hanoi(5)).to.eql(expected);
  });
});
