function getData(key) {
  return _data[key]();
}

const _data = {
  rb,
  text
};

function rb() {
  const start = 35;
  const interval = 50;
  const x1 = 30;
  const x2 = 270;
  const locations = {};
  ["a", "b", "c", "d", "e"].forEach((v, i) => {
    locations[`${v}1`] = { x: x1, y: interval * i + start };
    locations[`${v}2`] = { x: x2, y: interval * i + start };
  });
  const activity = {
    red: ["a1", "b1", "c1", "d1"],
    blue: ["a2", "b2", "c2", "d2", "e2"]
  };
  return {
    locations,
    activity,
    deets: {
      red: {
        explanation: "A red shape",
        color: 0xff0000
      },
      blue: {
        explanation: "A blue shape",
        color: 0x0000ff
      }
    }
  };
}

function text() {
  const start = 35;
  const interval = 50;
  const x1 = 30;
  const x2 = 210;
  const locations = {};
  ["a", "b", "c", "d", "e"].forEach((v, i) => {
    locations[`${v}1`] = { x: x1, y: interval * i + start };
    locations[`${v}2`] = { x: x2, y: interval * i + start };
  });
  const activity = {
    red: ["a1", "b1", "c1", "d1"],
    blue: ["a2", "b2", "c2", "d2", "e2"]
  };
  return {
    locations,
    activity,
    deets: {
      red: {
        explanation: "Red text",
        color: 0xff0000
      },
      blue: {
        explanation: "Blue text",
        color: 0x0000ff
      }
    }
  };
}
