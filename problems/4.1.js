function minDepth(node) {
  if (!node) return 0;
  return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
}

function maxDepth(node) {
  if (!node) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

module.exports = function isBalanced(node) {
  return maxDepth(node) - minDepth(node) <= 1;
}
