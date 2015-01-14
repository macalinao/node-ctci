module.exports = function createNodeList(node, lists, level) {
  lists = lists || [];
  level = level || 0;

  if (node.left) createNodeList(node.left, lists, level + 1);
  lists[level] = lists[level] || [];
  lists[level].push(node);
  if (node.right) createNodeList(node.right, lists, level + 1);

  return lists;
}
