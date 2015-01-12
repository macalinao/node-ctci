function reverse(head) {
  var tail = head.next;
  if (head.next) {
    var newHead = reverse(tail);
    tail.next = head;
    return newHead;
  } else {
    return head;
  }
}

module.exports = function isPalindrome(list) {

  // Copy list
  var listCopy = null;
  var node = list.head;
  var nodeCopy = null;
  while (node) {
    if (listCopy) {
      nodeCopy.next = {
        value: node.value
      };
      nodeCopy = nodeCopy.next;
    } else {
      listCopy = {
        value: node.value
      }
      nodeCopy = listCopy;
    }
    node = node.next;
  }

  // Reverse list
  var rev = reverse(list.head);

  // Compare lists for equality
  var a = listCopy;
  var b = rev;
  while (a) {
    if (a.value !== b.value) return false;
    a = a.next;
    b = b.next;
  }

  // O(n)

  return true;
};
