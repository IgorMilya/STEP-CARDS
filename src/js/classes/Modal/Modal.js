import { createTemplate } from './createTemplate.js'
import { resetValues } from '../../components/index.js'
import { create, find } from '../../tools/index.js'

export class Modal {
  // closeButtons = create('button', 'button modal-visit__button-cancel')
  constructor() {}

  renderModal(parent) {
    const modalElement = createTemplate()
    parent.append(modalElement)
  }

  closeModal() {
    const modalVisit = document.querySelector('.modal-visit')
    if (modalVisit.classList.contains('opened-modal')) {
      modalVisit.addEventListener('click', e => {
        console.log(e.currentTarget.classList.contains('modal-visit'))
      })
    }
    // document.addEventListener('click', e => {
    //   console.log(modalVisit, 'MODAL')
    //   console.log(e.target, 'TARGET')
    //   if (!e.composedPath().includes(modalVisit)) {
    //     modalVisit.classList.remove('opened-modal')
    //     console.log('FROM IF')
    //   }
    //
    //   resetValues()
    // })
  }

  closeModalButton() {
    const modalVisit = document.querySelector('.modal-visit')
    const cancelBtn = document.querySelector('.modal-visit__button-cancel')
    cancelBtn.addEventListener('click', e => {
      e.preventDefault()
      modalVisit.classList.remove('opened-modal')
      resetValues()
    })
    // this.closeModal()
  }

  openModal() {
    const modalVisit = document.querySelector('.modal-visit')
    modalVisit.classList.add('opened-modal')
    // this.closeModal()
  }
}
