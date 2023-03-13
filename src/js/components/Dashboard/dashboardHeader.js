import { create } from '../../tools'
import { boardHeaderContent } from './dashboard.utils.js'

export const dashboardHeader = create('div', 'board-header')

const headerCards = boardHeaderContent.map(({ text, path, value }) => {
  const card = create('div', 'header-card')
  const img = create('img', 'card-image')
  const content = create('div', 'card-content')
  const title = create('span', 'card-title', `${text}`)
  const span = create('span', 'card-value', `${value}`)

  img.src = path
  img.alt = `${text} icon`

  content.append(title, span)
  card.append(img, content)

  return card
})

dashboardHeader.append(...headerCards)
