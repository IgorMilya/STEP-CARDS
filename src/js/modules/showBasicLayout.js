// Тут міняємо стилі Саша

export const showBasicLayout = () => {
  const main = document.querySelector('.page-body')
  const headerLogo = document.querySelector('.header-logo-wrapp')
  const sideBar = document.querySelector('.aside')
  const headerContent = document.querySelector('.header-content')
  const headerSearchInput = document.querySelector('.header-search-wrap')
  const headerAvatar = document.querySelector('.header-avatar')

  main.innerHTML = ''
  sideBar.classList.add('fade-out')
  headerLogo.classList.add('active')
  headerContent.classList.add('active')
  headerSearchInput.classList.add('fade-out')
  headerAvatar.classList.add('fade-out')
}
