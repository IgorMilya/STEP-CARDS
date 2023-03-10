import { showElements } from './showElement'

export const showInputs = () => {
  const depList = document.querySelector('.department')
  depList.addEventListener('click', e => {
    const listItem = document.querySelectorAll('.doctor-item')
    const extra = document.querySelectorAll('.modal-visit__extra')

    const itemTab = e.target.getAttribute('data-all')
    const itemTabPost = e.target.getAttribute('data-post')

    showElements(listItem, itemTabPost)
    showElements(extra, itemTab, itemTabPost)
  })
}
