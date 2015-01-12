function minDepth(node) {
  if (!node) return 0;
  if (node.left && node.right) {
    return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
  } else {
    return 1;
  }
}

function maxDepth(node) {
  if (!node) return 0;
  if (node.left && node.right) {
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
  } else if (node.left) {
    return maxDepth(node.left) + 1;
  } else {
    return maxDepth(node.right) + 1;
  }
}

module.exports = function isBalanced(node) {
  return maxDepth(node) - minDepth(node) <= 1;
}
