import { Modal, Visit } from '../classes'
import { handleForm } from '../components'

export const renderVisitModal = (parent, visit, option) => {
  const modal = new Modal()

  modal.renderModal(parent, option)
  visit.showForm()

  modal.closeModalButton()
  // modal.openModal()
  modal.closeModal()

  handleForm()
}
