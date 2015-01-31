var QUARTER = 25;
var DIME = 10;
var NICKEL = 5;
var PENNY = 1;

var centCombos = module.exports = function centCombos(n) {
  var sum = 0;

  for (var q = 0; q < n / QUARTER; q++) {
    var qs = q * QUARTER;

    for (var d = 0; d < (n - qs) / DIME; d++) {
      var ds = d * DIME + qs;

      for (var ni = 0; ni < (n - ds) / NICKEL; ni++) {
        var nis = ni * NICKEL + ds;

        var p = n - nis;

        sum++;

      }

    }

  }

  return sum;
};
