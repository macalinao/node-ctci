var expect = require('chai').expect;
var kthtolast = require('./2.2');
var LinkedList = require('linked-list-js');

describe('2.2', function() {
  it('should work', function() {
    var arr = [4, 2, 5, 5, 8, 13, 17, 13, 9, 0, 2];
    var list = new LinkedList(arr);
    expect(kthtolast(list, 0)).to.equal(2);
    expect(kthtolast(list, 10)).to.equal(4);
  });
});
