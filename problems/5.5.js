module.exports = function countConvertBits(a, b) {
  var sum = 0;
  while (a !== 0 || b !== 0) {
    var mask = 0x1;
    if (((a & mask) ^ (b & mask)) !== 0) {
      sum++;
    }
    a = a >> 1;
    b = b >> 1;
  }
  return sum;
};
