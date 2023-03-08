// Тут міняємо стилі Саша

export const showBasicLayout = () => {
  const button = document.querySelector('.header-button')

  button.addEventListener('click', e => {
    const headerLogo = document.querySelector('.header-logo-wrapp')
    console.log('headerLogo:', headerLogo)
    headerLogo.classList.add('active')

    const headerContent = document.querySelector('.header-content')
    headerContent.classList.add('active')

    const headerSearchInput = document.querySelector('.header-search-wrap')
    headerSearchInput.classList.add('fade-out')

    const sideBar = document.querySelector('.aside')
    console.log('sideBar:', sideBar)
    sideBar.classList.add('fade-out')

    const headerAvatar = document.querySelector('.header-avatar')
    headerAvatar.classList.add('fade-out')
  })
}
