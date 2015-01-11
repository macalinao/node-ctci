// 1.7 -- zero columns/rows in a matrix if something is zero
module.exports = function zero(matrix) {
  var zeroCols = [];

  for (var i = 0; i < matrix.length; i++) { // row
    for (var j = 0; j < matrix[0].length; j++) { // column
      if (matrix[i][j] === 0) {
        zeroCols.push(j);
        for (var k = 0; k < matrix[0].length; k++) {
          matrix[i][k] = 0;
        }
        break;
      }
    }
  }

  zeroCols.map(function(col) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  });

  return matrix;
};
