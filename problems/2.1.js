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

module.exports.noBuffer = function removeDups(list) {
  // i love js
  list.containsBeforeIndex = function(val, index) {
    var it = this.iterator();
    for (var i = 0; i < index; i++) {
      if (it.next() == val) return true;
    }
    return false;
  };

  var last = list.head;
  var node = last.next;
  for (var i = 1; node;) {
    if (list.containsBeforeIndex(node.value, i)) {
      last.next = node.next;
      node = node.next;
    } else {
      last = node;
      node = node.next;
      i++;
    }
  }
  return list;
};
