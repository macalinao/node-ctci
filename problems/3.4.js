module.exports = function(amt) {
  var stacks = [
    [],
    [],
    []
  ];
  stacks[0].name = '0';
  stacks[1].name = '1';
  stacks[2].name = '2';

  // Construct the stacks
  for (var i = amt; i >= 1; i--) {
    stacks[0].push(i);
  }

  function moveDisks(n, origin, dest, buffer) {
    if (n <= 0) return;

    moveDisks(n - 1, origin, buffer, dest);
    // console.log('Move', origin[origin.length - 1], 'from', origin.name, 'to', dest.name);
    dest.push(origin.pop());
    moveDisks(n - 1, buffer, dest, origin);
  }

  moveDisks(amt, stacks[0], stacks[2], stacks[1]);
  return stacks;
};
