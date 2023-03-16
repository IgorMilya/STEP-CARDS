import { create, createEl } from '../../tools'
import { boardHeaderContent } from './dashboard.utils'

export const dashboardHeader = create('div', 'dashboard-header')

const headerCards = boardHeaderContent.map(({ text, path, value, className }) => {
  const card = create('div', 'header-card')
  const cardImageWrap = create('div', 'card-image-wrap')
  const img = createEl({ el: 'img', css: 'card-image', src: path, alt: `${text} icon` })
  const content = create('div', 'card-content')
  const title = create('div', 'card-title', `${text}`)
  const span = create('span', className, `${value}`)

  cardImageWrap.append(img)
  content.append(title, span)
  card.append(cardImageWrap, content)

  return card
})

dashboardHeader.append(...headerCards)
