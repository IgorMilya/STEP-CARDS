import { find } from '../tools'
import { Button } from '../UI'

export const changeBasicLayout = () => {
  const main = find('.main-content')
  const headerLogo = find('.header-logo-wrapp')
  const headerSearchInput = find('.header-search-wrap')
  const sideBar = find('.sidebar')
  const headerContent = find('.header-content')
  const headerBtnWrapper = find('.header-button')
  const headerAvatar = find('.header-avatar')
  const newPatientBtn = Button('register', 'New Patient')
  main.innerHTML = ''

  sideBar.classList.add('fade-out')
  headerLogo.classList.add('active')
  headerContent.classList.add('active')
  headerSearchInput.classList.add('fade-out')
  headerAvatar.classList.add('fade-out')
  headerBtnWrapper.innerHTML = newPatientBtn
}
