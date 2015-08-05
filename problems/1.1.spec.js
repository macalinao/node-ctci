var expect = require('chai').expect;
var isUniqueChars = require('./1.1');

describe('1.1', function() {
  it('should check for unique characters', function() {
    expect(isUniqueChars('asdfgh')).to.be.true;
    expect(isUniqueChars('asdfgha')).to.be.false;
    expect(isUniqueChars('asdfghh')).to.be.false;
    expect(isUniqueChars('asdfghqwer')).to.be.true;
    expect(isUniqueChars('asdfghjskjkj')).to.be.false;
  });
});
