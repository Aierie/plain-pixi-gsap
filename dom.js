function _updater(target) {
  return function updateTargetText(text) {
    document.querySelector(target).textContent = text;
  };
}
