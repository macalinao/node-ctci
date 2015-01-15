// It checks if the number is of the form 2^n, where n is any integer
module.exports = function(n) {
  return ((n & (n - 1)) == 0);
};
