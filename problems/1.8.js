function isSubstring(str, parent) {
  return parent.indexOf(str) > -1;
}

// Check if s2 is a rotation of s1
module.exports = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  return isSubstring(s2, s1 + s1);
};
