var SetOfStacks = module.exports = function SetOfStacks(capacity) {
  this.capacity = capacity;
};

SetOfStacks.prototype = {
  stacks: null,
  push: function(val) {
    if (!this.stacks) {
      this.stacks = {};
    }

    var node = {
      value: val
    };

    // Check if head is set
    if (!this.stacks.head) {
      this.stacks.head = node;
      return;
    }

    // Check if overflow
    var len = 0;
    var n = this.stacks.head;
    while (n) {
      len++;
      n = n.next;
    }

    if (len >= this.capacity) {
      var newStack = {
        head: node,
        next: this.stacks
      };
      this.stacks = newStack;
      return;
    }

    // Else, push
    node.next = this.stacks.head;
    this.stacks.head = node;

  },
  pop: function() {
    if (!this.stacks) {
      return -1;
    }
    var ret = this.stacks.head.value;

    if (this.stacks.head.next) {
      // Go to next node in stack
      this.stacks.head = this.stacks.head.next;
    } else {
      // Go to next stack
      this.stacks = this.stacks.next;
    }

    return ret;
  },
  popAt: function(index) {
    var stack = this.stacks;
    for (var i = 0; i < index; i++) {
      if (!stack.next) throw new Error('Stack does not exist!');
      stack = stack.next;
    }

    var head = stack.head;
    if (!head) {
      return -1;
    }

    var ret = stack.head.value;
    stack.head = stack.head.next;

    return ret;
  }
};
