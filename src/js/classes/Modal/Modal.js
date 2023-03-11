import { createTemplate } from './createTemplate.js'

export class Modal {
  constructor() {}

  showModal(parent) {
    const modalElement = createTemplate()
    parent.append(modalElement)
  }

  closeModal() {
    const modalVisit = document.querySelector('.modal-visit')
    document.addEventListener('click', e => {
      if (!e.composedPath().includes(modalVisit)) {
        modalVisit.classList.remove('opened')
      }
    })
  }

  closeModalButton() {
    const modalVisit = document.querySelector('.modal-visit')
    const cancelBtn = document.querySelector('.modal-visit__button-cancel')
    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      modalVisit.classList.remove('opened')
    })
  }
  openModal() {
    const modalVisit = document.querySelector('.modal-visit')
    modalVisit.classList.add('opened')
  }
}
