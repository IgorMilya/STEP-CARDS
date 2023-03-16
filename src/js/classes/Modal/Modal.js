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
    const cancelBtn = document.querySelector('.modal-visit__button-cancel')

    darkBlock.addEventListener('click', e => {
      e.preventDefault()
      if (!e.composedPath().includes(modalVisit)) {
        darkBlock.remove()
      }
    })

    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      darkBlock.remove()
    })
  }
}
