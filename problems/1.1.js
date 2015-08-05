module.exports = function isUniqueChars(s) {
  s = s.split('').sort();
  for (var i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) return false;
  }
  return true;
};
