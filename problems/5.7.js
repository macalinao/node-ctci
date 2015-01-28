function aug(arr) {
  arr.getBit = function(j, i) {
    return (arr[i] >> j) & 0x1;
  };
  return arr;
}

var findMissing = module.exports = function findMissing(arr, indices, bit) {
  bit = bit || 0;

  if (!indices) {
    indices = [];
    for (var i = 0; i < arr.length; i++) {
      indices.push(i);
    }
  }

  var zeroes = [];
  var ones = [];

  for (var i = 0; i < indices.length; i++) {
    var index = indices[i];
    if (arr.getBit(bit, index) == 0) {
      zeroes.push(index);
    } else {
      ones.push(index);
    }
  }

  if (ones.length == 0 && zeroes.length == 0) {
    return 0;
  }

  if (ones.length < zeroes.length) {
    return (findMissing(arr, ones, bit + 1) << 1) | 0x1;
  } else {
    return (findMissing(arr, zeroes, bit + 1) << 1);
  }

};

findMissing.aug = aug;
