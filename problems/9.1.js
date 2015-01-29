var countStepCombos = module.exports = function countStepCombos(n, res) {
  res = res || [];

  if (n < 0) return 0;
  if (n == 0) return 1;
  if (res[n]) return res[n];

  return res[n] = countStepCombos(n - 3, res) + countStepCombos(n - 2, res) + countStepCombos(n - 1, res);
};
