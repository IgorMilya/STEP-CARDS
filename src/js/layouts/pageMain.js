import { Aside } from './aside'
import imgAvatar from '../../assets/images/avatar/circle.png'
import iconInput from '../../assets/asideIcons/search-input.svg'

export const PageMain = () => {
  const PageMain = document.createElement('main')
  PageMain.classList.add('page')

  const pageContent = document.createElement('div')
  pageContent.classList.add('page-content')

  pageContent.innerHTML = `
  <div class="page-body"></div>
  `

  pageContent.prepend(Aside())
  PageMain.append(pageContent)

  return PageMain
}
