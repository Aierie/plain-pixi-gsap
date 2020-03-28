function registerPixiPlugin() {
  gsap.registerPlugin(PixiPlugin);
}

function applyTimeline(locations, activity, targetName, target) {
  const targetActivity = activity[targetName];
  gsap.set(target, {
    pixi: locations[targetActivity[0]],
    data: targetActivity[0]
  });
  const tl = gsap.timeline();
  targetActivity.map(activity =>
    tl.to(target, {
      pixi: locations[activity],
      data: activity,
      onComplete: function() {
        console.log(this);
      }
    })
  );
  return tl;
}
