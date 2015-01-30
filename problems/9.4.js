var subsets = module.exports = function subsets(arr) {
  if (arr.length === 0) return [[]];

  var ret = [];

  var headSets = subsets(arr.slice(0, arr.length - 1));
  var tail = [arr[arr.length - 1]];
  ret = ret.concat(headSets).concat(headSets.map(function(set) {
    return set.concat(tail);
  }));

  return ret;
};
