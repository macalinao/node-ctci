module.exports = function prevNextBin(num) {
  var prev;
  var next;
  for (var i = 0; (!prev || !next) && i < 32; i++) {
    var mask = 0x1 << i;
    if ((num & mask) != mask) continue;

    if (!prev) {
      if (i > 0) {
        var rightMask = mask >> 1;
        // Check if right is blank
        if ((num & rightMask) === 0) {
          prev = (num | rightMask) & ~mask;
        }
      }
    }

    if (!next) {
      var leftMask = mask << 1;
      // Check if left is blank
      if ((num & leftMask) === 0) {
        next = (num | leftMask) & ~mask;
      }
    }

  }

  return [prev, next];
};
