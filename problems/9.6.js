var parens = module.exports = function parens(n) {
  if (n === 1) return ['()'];

  var sub = parens(n - 1);
  var ret = [];
  sub.map(function(s) {
    var strh = '()' + s;
    if (ret.indexOf(strh) === -1) ret.push(strh);

    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i) === ')') {
        var str = s.substring(0, i) + '()' + s.substring(i);
        if (ret.indexOf(str) === -1) {
          ret.push(str);
        }
      }
    }
  });
  return ret;
};
