// Problem 1.5 -- string compression
module.exports = function compress(str) {
  if (str.length === 0) return str;
  if (str.length === 1) return str + 1;

  var ret = '';

  var char = str.charAt(0);
  var count = 1;

  for (var i = 1; i < str.length; i++) {
    var c = str.charAt(i);
    if (c != char) {
      ret += char + count;
      char = c;
      count = 0;
    }
    count++;
  }

  ret += char + count;

  if (ret.length >= str.length) return str;

  return ret;
};
