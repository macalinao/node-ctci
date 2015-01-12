var sortStack = module.exports = function sortStack(s) {
  var buffer = [];
  while (s.length !== 0) {
    var num = s.pop();
    while (buffer.length !== 0 && num > buffer[buffer.length - 1]) {
      s.push(buffer.pop());
    }
    buffer.push(num);
  }
  return buffer;
};
