function asView(fn) {
  return function wrapped(...args) {
    return {
      view: fn(...args)
    };
  };
}

const addInteractiveCircle = asView(function addInteractiveCircle({
  color,
  click
}) {
  const circleContainer = new PIXI.Graphics();
  circleContainer.lineStyle(1, 0x000000);
  circleContainer.beginFill(color);
  circleContainer.drawCircle(0, 0, 15);
  circleContainer.endFill();
  circleContainer.interactive = true;
  circleContainer.buttonMode = true;
  circleContainer.on("click", click);
  return circleContainer;
});

function setCircleState(gs, target, params) {
  gs.set(target, { pixi: { fill: params } });
}

const addText = asView(function addText({ color, click }) {
  const t = new PIXI.Text("default", { fill: color });
  t.interactive = true;
  t.buttonMode = true;
  t.on("click", click);
  return t;
});

function _setTextState(states) {
  return function setTextState(gs, target, prev, next) {
    if (prev !== null) {
      // const transition = states.transitions[prev][next];
      const transition = "transition";
      const transitionDuration = 0.1;
      if (transition !== undefined) {
        gs.set(
          target,
          { pixi: { text: transition } },
          `-=${transitionDuration}`
        );
      }
    }
    gs.set(target, { pixi: { text: next } });
  };
}
