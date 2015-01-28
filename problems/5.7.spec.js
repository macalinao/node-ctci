var expect = require('chai').expect;
var findMissing = require('./5.7');
var aug = findMissing.aug;

describe('5.7', function() {
  it('should find the missing element of the array', function() {
    var mis7 = aug([0, 1, 2, 3, 4, 5, 6, 8, 9]);

    var els = [];
    for (var i = 0; i < 10000; i++) {
      els.push(i);
    }
    els.splice(198);
    var mis198 = aug(els);

    expect(findMissing(mis7)).to.equal(7);
    expect(findMissing(mis198)).to.equal(198);
  });
});
