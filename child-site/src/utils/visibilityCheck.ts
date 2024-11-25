
export function setupOverlayDetection(
  element: HTMLElement, 
  onOverlayChange: (isOverlayed: boolean) => void
) {
  let visibleSince = 0;

  const observer = new IntersectionObserver((changes) => {
    for (const change of changes) {
      // Feature detection for Intersection Observer v2
      if (typeof (change as any).isVisible === 'undefined') {
        (change as any).isVisible = true;
      }

      if (change.isIntersecting && (change as any).isVisible) {
        visibleSince = change.time;
        onOverlayChange(false);
      } else {
        visibleSince = 0;
        onOverlayChange(true);
      }
    }
  }, {
    threshold: [1.0],
    trackVisibility: true,
    delay: 100
  });

  observer.observe(element);
  return observer;
} 