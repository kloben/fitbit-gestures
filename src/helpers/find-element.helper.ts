import document from 'document'

export function findElement (element: string | Element): Element {
  let el
  if (typeof element === 'string') {
    el = document.getElementById(element)
  } else {
    el = element
  }
  if (!el) {
    throw new Error('Element not found')
  }
  return el
}
