var expect = require('chai').expect;
var removeDups = require('./2.1');
var LinkedList = require('linked-list-js');

describe('2.1', function() {
  it('should remove duplicates', function() {
    var list = new LinkedList([4, 2, 5, 5, 8, 13, 17, 13, 9, 0, 2]);
    var expected = [4, 2, 5, 8, 13, 17, 9, 0];
    expect(removeDups(list).toArray()).to.eql(expected);
  });
  it('should remove duplicates no buffer', function() {
    var list = new LinkedList([4, 2, 5, 5, 8, 13, 17, 13, 9, 0, 2]);
    var expected = [4, 2, 5, 8, 13, 17, 9, 0];
    expect(removeDups.noBuffer(list).toArray()).to.eql(expected);
  });
});
