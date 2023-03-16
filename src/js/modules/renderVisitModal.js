import { Modal } from '../classes'
import { handleForm } from '../components'

export const renderVisitModal = (parent, obj, option, id) => {
  const modal = new Modal()

  modal.renderModal(parent, option)
  obj.showForm()
  modal.closeModal()
  handleForm(option, id)
}
