module.exports = function isBST(node, min, max) {
  if (!node) return true;
  if (max != null) {
    if (node.value > max) return false;
    if (node.value < min) return false;
  }
  return isBST(node.left, null, node.value) && isBST(node.right, node.value, null);
};
