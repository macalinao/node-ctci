module.exports = function kthtolast(list, k) {
  var arr = [];
  var node = list.head;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr[arr.length - k - 1];
};
