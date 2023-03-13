export const create = (el, css, text) => {
  const htmlElement = document.createElement(el)

  !!css && htmlElement.classList.add(css)
  !!text && (htmlElement.textContent = text)

  return htmlElement
}
