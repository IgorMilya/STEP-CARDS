import { Modal, handleForm } from '../classes'

export const renderVisitModal = (parent, clientData, option, id) => {
  const modal = new Modal()

  modal.renderModal(parent, option)
  clientData.showForm()
  modal.closeModal()
  handleForm(option, id)
}
