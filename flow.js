// sources:
// getData : data.js
// _updater: dom.js
// applyTimeline: gsap.js
// makeTable: table.js

function flow(dataName, createElement, targets, setState) {
  const app = new PIXI.Application({
    view: document.querySelector(targets.view),
    width: 300,
    height: 300
  });
  const { activity, locations, deets } = getData(dataName);
  const updateExplanation = _updater(targets.explanation);
  const keys = Object.keys(deets);
  const elements = {};
  keys.forEach(key => {
    elements[key] = createElement({
      ...deets[key],
      click: () => updateExplanation(deets[key].explanation)
    });
    app.stage.addChild(elements[key].view);
  });

  const mainTimeline = gsap.timeline();
  const timelines = {};
  keys.forEach(key => {
    timelines[key] = applyTimeline(
      locations,
      activity,
      key,
      elements[key],
      setState
    );
    mainTimeline.add(timelines[key], 0);
  });

  const table = makeTable(activity);
  document.querySelector(targets.table).appendChild(table);
  Array.from(table.querySelectorAll("tr")).forEach((tr, i, a) => {
    if (i) {
      tr.addEventListener("click", () => {
        mainTimeline.progress((i - 1) / (a.length - 1));
        mainTimeline.play();
      });
    }
  });

  return {
    app,
    elements,
    timelines,
    mainTimeline
  };
}
