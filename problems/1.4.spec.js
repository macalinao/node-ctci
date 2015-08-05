var expect = require('chai').expect;
var replaceSpaces = require('./1.4');

describe('1.4', function() {
  it('should replace spaces properly', function() {
    expect(replaceSpaces('The quick brown    ')).to.equal('The%20quick%20brown');
    expect(replaceSpaces('The quick brown fox      ')).to.equal('The%20quick%20brown%20fox');
    expect(replaceSpaces('Thequickbrownfox')).to.equal('Thequickbrownfox');
  });
});

