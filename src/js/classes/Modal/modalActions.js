import { find } from '../../tools/index.js'
// import { Modal } from './Modal.js'
import { renderVisitModal } from '../../modules/index.js'
import { Visit } from '../Visit/Visit.js'
// import { Visit } from '../Visit/Visit.js'

export const modalActions = () => {
  const openModalButton = find('.register')

  openModalButton.addEventListener('click', () => {
    const app = document.getElementById('app')
    const visit = new Visit({})
    renderVisitModal(app, visit)
    // const modal = new Modal()
    // modal.openModal()
    // modal.closeModal()
    // modal.closeModalButton()
  })
}
