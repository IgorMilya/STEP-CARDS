import { find } from '../../tools/index.js'
import { Modal } from './Modal.js'

export const modalActions = () => {
  const openModalButton = find('.register')

  openModalButton.addEventListener('click', () => {
    const modal = new Modal()
    modal.openModal()
    modal.closeModal()
  })
}
