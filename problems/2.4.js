module.exports = function partition(list, num) {
  var less = null;
  var more = null;

  var node = list.head;
  while (node) {
    var next = node.next;
    delete node.next;

    if (node.value < num) {
      if (less) {
        var tail = less;
        while (tail.next) tail = tail.next;
        tail.next = node;
      } else {
        less = node;
      }
    } else {
      if (more) {
        var tail = more;
        while (tail.next) tail = tail.next;
        tail.next = node;
      } else {
        more = node;
      }
    }

    node = next;
  }

  if (less && more) {
    var tail = less;
    while (tail.next) tail = tail.next;
    tail.next = more;
  } else if (more) {
    less = more;
  }
  return less;
};
