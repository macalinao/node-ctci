var fill = module.exports = function fill(pic, y, x, color, oldColor) {
  var val = pic[y][x];
  if (!oldColor) oldColor = val;
  if (color === oldColor) return pic;
  pic[y][x] = color;

  // Up
  if (y > 0) {
    if (pic[y - 1][x] === oldColor) {
      fill(pic, y - 1, x, color, oldColor);
    }
  }

  // Down
  if (y < pic.length - 1) {
    if (pic[y + 1][x] === oldColor) {
      fill(pic, y + 1, x, color, oldColor);
    }
  }

  // Left
  if (x > 0) {
    if (pic[y][x - 1] === oldColor) {
      fill(pic, y, x - 1, color, oldColor);
    }
  }

  // Right
  if (x < pic[0].length - 1) {
    if (pic[y][x + 1] === oldColor) {
      fill(pic, y, x + 1, color, oldColor);
    }
  }

  return pic;
};
