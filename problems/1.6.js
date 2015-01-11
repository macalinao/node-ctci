// prob 1.6 -- rotate matrix
module.exports = function rotate(matrix) {
  // Iterate over layers
  var layers = Math.floor(matrix.length / 2);
  for (var i = 0; i < layers; i++) {

    var first = i;
    var last = matrix.length - i - 1;

    for (var j = first; j < last; j++) {
      var jp = matrix.length - j - 1;

      var top = matrix[i][j];

      // Left -> Top
      matrix[i][j] = matrix[jp][i];

      // Bottom -> Left
      matrix[jp][i] = matrix[last][jp];

      // Right -> Bottom
      matrix[last][jp] = matrix[j][last];

      // Top -> Right
      matrix[j][last] = top;
    }

  }

  return matrix;
};
