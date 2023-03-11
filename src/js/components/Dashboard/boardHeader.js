import { createElement } from '../../tools'
import { boardHeaderContent } from './dashboard.utils.js'

export const boardHeader = createElement('div', 'board-header')

const headerCards = boardHeaderContent.map(({ text, path, value }) => {
  const card = createElement('div', 'header-card')
  const img = createElement('img', 'card-image')
  const content = createElement('div', 'card-content')
  const title = createElement('span', 'card-title', `${text}`)
  const span = createElement('span', 'card-value', `${value}`)

  img.src = path
  img.alt = `${text} icon`

  content.append(title, span)
  card.append(img, content)

  return card
})

boardHeader.append(...headerCards)
