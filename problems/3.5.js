var StackQueue = module.exports = function StackQueue() {};

StackQueue.prototype = {
  active: [],
  buffer: [],
  add: function(val) {
    // Adding is O(n).
    while (this.active.length > 0) {
      this.buffer.push(this.active.pop());
    }
    this.active.push(val);
    while (this.buffer.length > 0) {
      this.active.push(this.buffer.pop());
    }
  },
  poll: function() {
    return this.active.pop();
  }
};
