import { createTemplate } from './createTemplate.js'
import { resetValues } from '../../components/index.js'
import { create, find } from '../../tools/index.js'

export class Modal {
  darkBlock = document.querySelector('.dark-block')

  constructor() {}

  renderModal(parent) {
    const modalElement = createTemplate()
    parent.append(modalElement)
  }

  closeModal() {
    const modalVisit = document.querySelector('.modal-visit')
    this.darkBlock.addEventListener('click', e => {
      if (!e.composedPath().includes(modalVisit)) {
        this.darkBlock.classList.remove('opened-modal')
        resetValues()
      }
    })
  }

  closeModalButton() {
    const darkBlock = document.querySelector('.dark-block')
    const cancelBtn = document.querySelector('.modal-visit__button-cancel')
    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      darkBlock.classList.remove('opened-modal')
      resetValues()
    })
  }

  openModal() {
    this.darkBlock.classList.add('opened-modal')
  }
}
