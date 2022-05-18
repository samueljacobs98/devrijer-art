const setColours = (cols, rows, colours) => {
  const grid = new Array(cols);
  for (i = 0; i < cols; i++) {
    grid[i] = [];
    for (j = 0; j < rows; j++) {
      const index = Math.floor(Math.random() * 4);
      grid[i].push(colours[index]);
    }
  }
  return grid;
};

module.exports = setColours;
