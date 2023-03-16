export const create = (el, css, text) => {
  const htmlElement = document.createElement(el)

  !!css && htmlElement.classList.add(css)
  !!text && (htmlElement.textContent = text)

  return htmlElement
}
// TODO: delete create()

export const createEl = props => {
  const { el, css, text, src, alt, title } = props
  const htmlElement = document.createElement(el)

  !!css && htmlElement.classList.add(css)
  !!text && (htmlElement.textContent = text)
  !!src && (htmlElement.src = src) && (htmlElement.alt = alt)
  !!title && (htmlElement.title = title)

  return htmlElement
}
