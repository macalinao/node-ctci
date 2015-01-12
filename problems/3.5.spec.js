var expect = require('chai').expect;
var StackQueue = require('./3.5');

describe('3.5', function() {
  it('should behave like a queue', function() {
    var q = new StackQueue();
    q.add(1);
    q.add(2);
    q.add(3);
    q.add(4);
    q.add(5);
    q.add(6);

    expect(q.poll()).to.equal(1);
    expect(q.poll()).to.equal(2);
    expect(q.poll()).to.equal(3);
    expect(q.poll()).to.equal(4);
    expect(q.poll()).to.equal(5);
    expect(q.poll()).to.equal(6);
  });
});

