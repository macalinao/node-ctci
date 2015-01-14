var findSums = module.exports = function findSums(root, target, path, acc, ret) {
  if (!ret) ret = [];
  if (!root) return ret;
  if (!acc) {
    acc = root.value;
  } else {
    acc += root.value;
  }
  if (!path) {
    path = ['root'];
  }

  // Done
  if (acc === target) {
    ret.push(path.join(' -> '));
    return ret;
  }

  var left = path.slice();
  left.push('left');
  findSums(root.left, target, left, acc, ret);

  var right = path.slice();
  right.push('right');
  findSums(root.right, target, right, acc, ret);

  return ret;
};
