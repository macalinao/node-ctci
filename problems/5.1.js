module.exports = function insertBits(n, m, i, j) {
  for (var ind = 0; i + ind <= j; ind++) {
    var bit = 0x1 & (m >> ind);
    var pos = 0x1 << ind + i;
    if ((n & pos) === 0) {
      // If number must be set but is currently 0
      if (bit) n = n | pos;
    } else {
      // If number must be unset but is currently 1
      if (!bit) n = n & ~pos;
    }
  }
  return n;
};
