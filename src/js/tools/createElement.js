export const createElement = (element, selector, content) => {
  const htmlElement = document.createElement(element)

  !!selector ? htmlElement.classList.add(selector) : ''
  !!content ? (htmlElement.textContent = content) : ''

  return htmlElement
}
