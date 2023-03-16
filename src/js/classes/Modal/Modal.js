import { modalTemplate } from './modalTemplate.js'
import { find } from '../../tools/index.js'

export class Modal {
  constructor() {}

  renderModal(parent, option) {
    const modalElement = modalTemplate(option)
    parent.append(modalElement)
  }

  closeModal() {
    const darkBlock = find('.dark-block')
    const modalVisit = find('.modal-visit')
    const cancelBtn = find('.modal-visit__button-cancel')

    darkBlock.addEventListener('click', e => {
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
