var permutations = module.exports = function permutations(str) {
  if (str.length === 1) return [str];

  var split = str.split('');
  var head = str.substring(0, 1);
  var tail = str.substring(1);
  var tps = permutations(tail);

  var ret = [];
  tps.map(function(tp) {
    for (var i = 0; i <= tp.length; i++) {
      var str = tp.substring(0, i) + head + tp.substring(i);
      ret.push(str);
    }
  });
  return ret;
};
