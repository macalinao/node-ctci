module.exports = function newStack() {
  return {
    minStack: null,
    push: function(val) {
      var node = {
        value: val
      };

      if (!this.minStack) {
        this.minStack = {
          value: val
        };
      } else if (this.minStack.value >= val) {
        var curr = this.minStack;
        this.minStack = {
          value: val,
          next: curr
        };
      }

      if (this.top) {
        node.next = this.top;
      }
      this.top = node;
    },
    pop: function() {
      if (!this.top) throw new Error('Stack is empty!');
      var val = this.top.value;
      this.top = this.top.next;

      // Pop stack if next
      if ((this.minStack || {}).value === val) {
        this.minStack = this.minStack.next;
      }

      return val;
    },
    min: function() {
      return this.minStack ? this.minStack.value : -1;
    }
  };
};
