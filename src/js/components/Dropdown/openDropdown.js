export const openDropdown = (wrapper, list) => {
  wrapper.addEventListener('click', e => {
    list.classList.toggle('menu-open')
    if (!!e.target.querySelector('.modal-visit__dropdown-item')) {
      list.classList.remove('menu-open')
    }
  })
}
