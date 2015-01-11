module.exports = function add(a, b) {
  a = a.head;
  b = b.head;

  var ret = null;
  var carry = 0;

  while (a || b) {
    var an = a ? a.value : 0;
    var bn = b ? b.value : 0;
    var sum = an + bn + carry;

    var num = sum % 10;
    var carry = Math.floor(sum / 10);

    var node = {
      value: num
    };

    if (!ret) {
      ret = node;
    } else {
      var tail = ret;
      while (tail.next) tail = tail.next;
      tail.next = node;
    }

    if (a) {
      a = a.next;
    } else {
      a = null;
    }

    if (b) {
      b = b.next;
    } else {
      b = null;
    }

  }

  return ret;
};
