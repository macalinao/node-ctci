var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var isPalindrome = require('./2.7');

describe('2.7', function() {
  it('should be correct', function() {
    expect(isPalindrome(new LinkedList('madamimadam'.split('')))).to.be.true;
    expect(isPalindrome(new LinkedList('madamimnotadam'.split('')))).to.be.false;
  });
});
