var expect = require('chai').expect;
var LinkedList = require('linked-list-js');
var ThreeStacks = require('./3.1');

describe('3.1', function() {
  it('should implement 3 stacks', function() {
    var stacks = ThreeStacks();

    stacks.push(4, 0);
    stacks.push(3, 0);
    stacks.push(2, 0);
    stacks.push(1, 0);

    stacks.push(5, 1);
    stacks.push(4, 1);
    stacks.push(3, 1);
    stacks.push(2, 1);

    stacks.push(1, 2);
    stacks.push(2, 2);
    stacks.push(3, 2);
    stacks.push(4, 2);

    expect(stacks.pop(0)).to.equal(1);
    expect(stacks.pop(0)).to.equal(2);
    expect(stacks.pop(0)).to.equal(3);
    expect(stacks.pop(0)).to.equal(4);

    expect(stacks.pop(1)).to.equal(2);
    expect(stacks.pop(1)).to.equal(3);
    expect(stacks.pop(1)).to.equal(4);
    expect(stacks.pop(1)).to.equal(5);

    expect(stacks.pop(2)).to.equal(4);
    expect(stacks.pop(2)).to.equal(3);
    expect(stacks.pop(2)).to.equal(2);
    expect(stacks.pop(2)).to.equal(1);
  });
});
