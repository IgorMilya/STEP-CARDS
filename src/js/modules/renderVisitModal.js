import { Modal } from '../classes'
import { handleForm } from '../components'

export const renderVisitModal = (parent, visit, option, id) => {
  const modal = new Modal()

  modal.renderModal(parent, option)
  visit.showForm()
  modal.closeModal()
  handleForm(option, id)
}
