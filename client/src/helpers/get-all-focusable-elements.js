/**
 * Returns back a NodeList of focusable elements
 * that exist within the passed parent HTMLElement, or
 * an empty array if no parent passed.
 *
 * @param {HTMLElement} parent HTML element
 * @returns {(NodeList|Array)} The focusable elements that we can find
 */
export const getAllFocusableElements = parent => {
  if (!parent) {
    console.warn('You need to pass a parent HTMLElement')
    return [] // Return array so length queries will work
  }

  return parent.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)',
  )
}
