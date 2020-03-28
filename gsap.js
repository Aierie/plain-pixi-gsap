function registerPixiPlugin() {
  gsap.registerPlugin(PixiPlugin);
}

function applyTimeline(locations, activity, targetName, target, setState) {
  const targetActivity = activity[targetName];
  gsap.set(target.view, {
    pixi: locations[targetActivity[0]],
    data: targetActivity[0]
  });
  setState(gsap, target.view, null, targetActivity[0]);
  const tl = gsap.timeline();
  targetActivity.forEach((activity, idx) => {
    tl.to(target.view, {
      pixi: locations[activity],
      data: activity
    });
    setState(tl, target.view, idx > 0 ? idx - 1 : null, activity);
  });
  return tl;
}
