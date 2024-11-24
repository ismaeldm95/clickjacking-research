export function checkElementVisibility(element: HTMLElement): boolean {
  // Get element's bounding rectangle
  const rect = element.getBoundingClientRect()
  
  // Check if element is in viewport
  const isInViewport = (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )

  // Check if element is covered by other elements
  const elementAtPoint = document.elementFromPoint(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  )

  // Check if the element or its children are what we're actually seeing
  const isVisible = element === elementAtPoint || element.contains(elementAtPoint)

  return isInViewport && isVisible
}

export function checkOverlayAttempt(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect()
    const points = [
    [rect.left + 5, rect.top + 5],
    [rect.right - 5, rect.top + 5],
    [rect.left + 5, rect.bottom - 5],
    [rect.right - 5, rect.bottom - 5],
    [rect.left + rect.width / 2, rect.top + rect.height / 2]
  ]

  // Check multiple points to detect partial overlays
  return points.some(([x, y]) => {
    const elementAtPoint = document.elementFromPoint(x, y)
    return elementAtPoint && !element.contains(elementAtPoint)
  })
} 