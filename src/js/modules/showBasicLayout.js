import { Button } from '../UI'

export const showBasicLayout = () => {
  const main = document.querySelector('.main-content')
  const headerLogo = document.querySelector('.header-logo-wrapp')
  const sideBar = document.querySelector('.sidebar')
  const headerContent = document.querySelector('.header-content')
  const headerSearchInput = document.querySelector('.header-search-wrap')
  const headerAvatar = document.querySelector('.header-avatar')
  const headerBtnWrapper = document.querySelector('.header-button')
  const newPatientBtn = Button('register', 'New Patient')

  main.innerHTML = ''
  sideBar.classList.add('fade-out')
  headerLogo.classList.add('active')
  headerContent.classList.add('active')
  headerSearchInput.classList.add('fade-out')
  headerAvatar.classList.add('fade-out')
  headerBtnWrapper.innerHTML = newPatientBtn
}
