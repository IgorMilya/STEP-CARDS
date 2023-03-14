import { Modal, Visit } from '../classes'
import { handleForm } from '../components'

export const renderVisitModal = parent => {
  // prettier-ignore
  const pattern = 'A-Za-zА-Яа-яЁё\\s' //TODO:перенести в constants

  const modal = new Modal()
  const visit = new Visit({})

  modal.renderModal(parent)
  visit.showForm(pattern)
  modal.closeModalButton()

  handleForm()
}
