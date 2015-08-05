module.exports = function isPermutation(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
};
