var expect = require('chai').expect;
var newStack = require('./3.2');

describe('3.2', function() {
  it('should have a working min function', function() {
    var s = newStack();

    s.push(3);
    s.push(4);
    s.push(1);
    s.push(2);
    expect(s.min()).to.equal(1);
    s.pop();
    s.pop();
    expect(s.min()).to.equal(3);
    s.push(100);
    s.push(-1);
    expect(s.min()).to.equal(-1);
    s.pop();
    expect(s.min()).to.equal(3);
    s.pop();
    expect(s.min()).to.equal(3);
    s.push(-100);
    expect(s.min()).to.equal(-100);
  });
});
