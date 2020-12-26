export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.y <= 400 &&
    rect.top >= 0 &&
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
