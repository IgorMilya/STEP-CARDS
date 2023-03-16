import { createTemplate } from './createTemplate.js'
// import { resetValues } from '../../components/index.js'
import { create, find } from '../../tools/index.js'

export class Modal {
  constructor() {}

  renderModal(parent, option) {
    const modalElement = createTemplate(option)
    parent.append(modalElement)
  }

  closeModal() {
    const darkBlock = document.querySelector('.dark-block')
    const modalVisit = document.querySelector('.modal-visit')
    darkBlock.addEventListener('click', e => {
      if (!e.composedPath().includes(modalVisit)) {
        darkBlock.remove()
        // resetValues()
      }
    })
  }

  closeModalButton() {
    const darkBlock = document.querySelector('.dark-block')
    const cancelBtn = document.querySelector('.modal-visit__button-cancel')
    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      darkBlock.remove()
      // resetValues()
    })
  }

  // openModal() {
  //   this.darkBlock.classList.add('opened-modal')
  // }
}
