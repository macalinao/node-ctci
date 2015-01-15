module.exports = function swapBits(num) {
  return (((num & 0xaaaaaaaa) >> 1) | ((num & 0x55555555) << 1));
};
