var expect = require('chai').expect;
var parens = require('./9.6');

describe('9.6', function() {
  it('should get all parens pairs', function() {
    var num = 3;
    var ret = [
      '()()()',
      '(())()',
      '()(())',
      '(()())',
      '((()))'
    ].sort();

    expect(parens(num).sort()).to.eql(ret);
  });
});
