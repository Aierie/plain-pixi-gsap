function makeTable(activity) {
  const longestArrayLength = Math.max(
    ...Object.values(activity).map(ar => ar.length)
  );

  const table = document.createElement("table");
  const columns = [
    Array(longestArrayLength + 1)
      .fill(5)
      .map((v, i) => (i === 0 ? "Time" : i))
  ].concat(
    Object.entries(activity).map(([k, v]) => [
      k,
      ...fillBlanks(v, longestArrayLength)
    ])
  );
  const rows = Array(longestArrayLength + 1)
    .fill(5)
    .map(() => document.createElement("tr"));
  columns.forEach(col =>
    col.forEach((v, i, a) => {
      const tag = i === 0 ? "th" : "td";
      const el = document.createElement(tag);
      el.textContent = v;
      rows[i].appendChild(el);
    })
  );
  rows.forEach(row => table.appendChild(row));
  return table;
}

function fillBlanks(ar, length, fallback = "") {
  const n = [];
  for (let i = 0; i < length; i++) {
    n[i] = ar[i] === undefined ? fallback : ar[i];
  }
  return n;
}
