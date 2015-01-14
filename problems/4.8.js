function treesEqual(a, b) {
  if (!a && b) return false;
  if (!b && a) return false;
  if (!a && !b) return true;
  return a.value == b.value && treesEqual(a.left, b.left) && treesEqual(a.right, b.right);
}

var isSubtree = module.exports = function isSubtree(root, find) {
  if (!root) return false;
  if (treesEqual(root, find)) return true;
  return isSubtree(root.left, find) || isSubtree(root.right, find);
};
