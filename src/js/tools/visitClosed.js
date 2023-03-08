export const closeModalVisit = () => {
  const modalVisit = document.querySelector('.modal-visit')
  document.addEventListener('click', e => {
    if (!e.composedPath().includes(modalVisit)) {
      modalVisit.classList.remove('opened')
    }
  })
}
