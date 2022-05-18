const params = {
  cols: 10,
  rows: 10,
  scaleMin: 1,
  scaleMax: 30,
  freq: 0.001,
  amp: 0.2,
  frame: 0,
  animate: true,
  lineCap: "butt",
};

const limitParams = {
  cols: {
    min: 1,
    max: 50,
    step: 1,
  },
  rows: {
    min: 1,
    max: 50,
    step: 1,
  },
  scaleMin: {
    min: 1,
    max: 300,
  },
  scaleMax: {
    min: 1,
    max: 300,
  },
  freq: {
    min: -0.01,
    max: 0.01,
  },
  amp: {
    min: 0,
    max: 1,
  },
  frame: {
    min: 0,
    max: 999,
  },
};

module.exports = { params, limitParams };
