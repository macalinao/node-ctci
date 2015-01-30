var expect = require('chai').expect;
var subsets = require('./9.4');

describe('9.4', function() {

  it('should get all subsets', function() {
    var arr = [1, 2, 3];
    var expected = [
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3]
    ];

    expect(subsets(arr)).to.eql(expected);
  });
});
