module.exports = function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
};
