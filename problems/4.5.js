function leftMostChild(node) {
  if (node.left) return leftMostChild(node.right);
  if (node.right) return leftMostChild(node.right);
  return this;
}

function leftParent(node) {
  if (node.parent) {
    if (node.parent.left == node) return node;
    return leftParent(node.parent);
  }
  return null;
}

module.exports = function nextNode(node) {
  // Get leftmost child on right node
  if (node.right) return leftMostChild(node.right);
  // Otherwise, find next parent left node so we can move to the parent
  var parent = leftParent(node);
  return parent.parent;
};

