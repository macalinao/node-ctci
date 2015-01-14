function contains(root, node) {
  if (!root) return false;
  if (root == node) return true;
  return contains(root.left, node) || contains(root.right, node);
}

var commonAncestor = function commonAncestor(root, a, b) {
  if (!root) return null;
  if (root == a || root == b) return root;
  var aLeft = contains(root.left, a);
  var bLeft = contains(root.left, b);

  if (aLeft !== bLeft) return root;

  var side = aLeft ? root.left : root.right;
  return commonAncestor(side, a, b);
};

module.exports = function commonAncestorCheck(root, a, b) {
  if (!contains(root, a) || !contains(root, b)) return null;
  return commonAncestor(root, a, b);
};
