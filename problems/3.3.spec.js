var expect = require('chai').expect;
var SetOfStacks = require('./3.3');

describe('3.3', function() {
  it('should behave like a single stack', function() {
    var set = new SetOfStacks(5);

    set.push(1);
    set.push(2);
    set.push(3);
    set.push(4);
    set.push(5);
    set.push(6);
    set.push(7);

    expect(set.pop()).to.equal(7);
    expect(set.pop()).to.equal(6);
    expect(set.pop()).to.equal(5);
    expect(set.pop()).to.equal(4);
    expect(set.pop()).to.equal(3);
    expect(set.pop()).to.equal(2);
    expect(set.pop()).to.equal(1);
  });

  it('should allow popping a certain stack', function() {

    var set = new SetOfStacks(5);

    set.push(1);
    set.push(2);
    set.push(3);
    set.push(4);
    set.push(5);
    set.push(6);
    set.push(7);

    expect(set.popAt(1)).to.equal(5);
    expect(set.popAt(1)).to.equal(4);
    expect(set.popAt(1)).to.equal(3);

  });
});
