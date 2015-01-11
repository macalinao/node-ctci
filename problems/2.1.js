// Remove duplicates from a linked list
module.exports = function removeDups(list) {
  var found = [];

  var last = null;
  var node = list.head;
  found.push(node.value);
  while (node.next) {
    last = node;
    node = node.next;

    if (found.indexOf(node.value) > -1) {
      if (node.next) {
        last.next = node.next;
        node = node.next;
      } else {
        last.next = null;
      }
      continue;
    }

    found.push(node.value);
  }
  return list;
};
