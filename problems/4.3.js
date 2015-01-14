var createBinaryTree = module.exports = function createBinaryTree(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return {
    value: arr[0]
  };

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var val = arr[mid];
  var right = arr.slice(mid + 1);

  var node = {
    value: val,
    left: createBinaryTree(left),
    right: createBinaryTree(right)
  };
  return node;
};
