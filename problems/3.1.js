module.exports = function() {
  return {
    data: new Array(100),
    indices: [0, 0, 0],
    push: function(val, stack) {
      var rel = this.indices[stack];
      this.indices[stack] += 1;
      this.data[Math.floor(this.data.length / 3) * stack + rel] = val;
    },
    pop: function(stack) {
      this.indices[stack] -= 1;
      var rel = this.indices[stack];
      return this.data[Math.floor(this.data.length / 3) * stack + rel];
    }
  };
};
