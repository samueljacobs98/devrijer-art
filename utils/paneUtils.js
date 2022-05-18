const Tweakpane = require("tweakpane");

const createPane = (params, limitParams) => {
  const { cols, rows, scaleMin, scaleMax, freq, amp, frame } = limitParams;

  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: "Grid " });
  folder.addInput(params, "lineCap", {
    options: { butt: "butt", round: "round", square: "square" },
  });
  folder.addInput(params, "cols", {
    min: cols.min,
    max: cols.max,
    step: cols.step,
  });
  folder.addInput(params, "rows", {
    min: rows.min,
    max: rows.max,
    step: rows.step,
  });
  folder.addInput(params, "scaleMin", { min: scaleMin.min, max: scaleMin.max });
  folder.addInput(params, "scaleMax", { min: scaleMax.min, max: scaleMax.max });

  folder = pane.addFolder({ title: "Noise" });
  folder.addInput(params, "freq", { min: freq.min, max: freq.max });
  folder.addInput(params, "amp", { min: amp.min, max: amp.max });
  folder.addInput(params, "animate");
  folder.addInput(params, "frame", { min: frame.min, max: frame.max });
};

module.exports = createPane;
