var findSums = module.exports = function findSums(root, target, path, acc, ret) {
  if (!ret) ret = [];
  if (!root) return ret;
  if (!acc) {
    acc = [root.value];
  } else {
    acc = acc.map(function(el) {
      return el + root.value;
    });
    acc.push(root.value);
  }
  if (!path) {
    path = ['root'];
  }

  // find paths backwards
  acc.map(function(total, i) {
    if (total === target) {
      var full = path.slice(i);
      for (var j = 0; j < i; j++) {
        full.unshift('skip');
      }
      ret.push(full.join(' -> '));
    }
  });

  var left = path.slice();
  left.push('left');
  findSums(root.left, target, left, acc, ret);

  var right = path.slice();
  right.push('right');
  findSums(root.right, target, right, acc, ret);

  return ret;
};
