var countStepCombos = module.exports = function countStepCombos(n) {
  if (n < 0) return 0;
  if (n == 0) return 1;
  return countStepCombos(n - 3) + countStepCombos(n - 2) + countStepCombos(n - 1);
};
