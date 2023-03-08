import { Aside } from './aside'
import imgAvatar from '../../assets/images/avatar/circle.png'
import iconInput from '../../assets/asideIcons/search-input.svg'

export const PageMain = () => {
  const PageMain = document.createElement('main')
  PageMain.classList.add('main')

  PageMain.innerHTML = `
  <div class="page-body"></div>
  `

  PageMain.prepend(Aside())

  return PageMain
}
