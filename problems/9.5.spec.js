var expect = require('chai').expect;
var permutations = require('./9.5');

describe('9.5', function() {
  it('should get all permutations of a string', function() {
    var str = 'cat';
    var res = [
      'cat',
      'cta',
      'act',
      'atc',
      'tac',
      'tca'
    ].sort();

    expect(permutations(str).sort()).to.eql(res);
  });
});
