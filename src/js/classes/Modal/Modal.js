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
}
