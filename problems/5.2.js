module.exports = function doubleToBin(double) {
  var int = Math.floor(double);
  var dec = double - int;
  var str = '';

  // Int to bin str
  while (int > 0) {
    str = ((int & 0x1) ? '1' : '0') + str;
    int = int >> 1;
  }

  // Decimal pt
  str += '.';

  // Fraction to bin str
  var limit = 32;
  var mult = 0.5;
  while (dec > 0 && limit >= 0) {
    if (dec - mult / 2 >= mult / 2) {
      str += '1';
      dec -= mult;
    } else {
      str += '0';
    }
    mult *= 0.5;
    limit--;
  }

  return str;
};
