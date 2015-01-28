module.exports = function drawHorizontalLine(screen, width, x1, x2, y) {
  var leftExtra = x1 % 8;
  var rightExtra = ((x2 % 8) + 1) % 8;

  var startFull = Math.ceil(x1 / 8);
  var endFull = Math.floor(x2 / 8);
  if (rightExtra) endFull -= 1;

  // Set full parts of screen
  for (var i = startFull; i <= endFull; i++) {
    screen[y][i] = 0xff;
  }

  // Set left part of row
  if (leftExtra != 0) {
    var mask = 0;
    for (var i = 0; i < leftExtra; i++) {
      mask = mask | (1 << i);
    }
    screen[y][startFull - 1] = mask;
  }

  // Set right part of row
  if (rightExtra != 0) {
    var mask = 0;
    for (var i = 0; i < rightExtra; i++) {
      mask = mask | (1 << (7 - i));
    }
    screen[y][endFull + 1] = mask;
  }

  return screen;
};
