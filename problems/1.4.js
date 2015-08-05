module.exports = function replaceSpaces(s) {
  var buffer = s.split('');
  var spaced = true;
  var cur = buffer.length - 1;
  for (var i = buffer.length - 1; i >= 0; i--) {
    if (buffer[i] === ' ') {
      if (spaced) {
        continue;
      } else {
        buffer[cur--] = '0';
        buffer[cur--] = '2';
        buffer[cur--] = '%';
      }
    } else {
      spaced = false;
      buffer[cur--] = buffer[i];
    }
  }
  return buffer.join('');
};
