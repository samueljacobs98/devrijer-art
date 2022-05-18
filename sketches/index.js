const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");
const { params, limitParams } = require("../utils/params");
const setColours = require("../utils/colourUtils");
const createPane = require("../utils/paneUtils");

const settings = {
  dimensions: [3000, 3000],
  animate: true,
};

const colours = ["#5B147E", "#FFFAC2", "#DC4963", "#4C1279"];

const colourGrid = setColours(
  limitParams.cols.max,
  limitParams.rows.max,
  colours
);

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;

      const f = params.animate ? frame : params.frame;

      const n = random.noise3D(x, y, f * 10, params.freq);
      const angle = n * Math.PI * params.amp;
      const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate(angle);

      context.lineWidth = scale;
      context.lineCap = params.lineCap;

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.strokeStyle = colourGrid[col][row];
      context.stroke();

      context.restore();
    }
  };
};

createPane(params, limitParams);
canvasSketch(sketch, settings);
