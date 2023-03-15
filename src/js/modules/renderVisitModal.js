import { Modal, Visit } from '../classes'
import { handleForm } from '../components'

export const renderVisitModal = parent => {
  const pattern = 'a-zA-Zа-яА-ЯіІїЇєЄЁё\\s'

  const modal = new Modal()
  const visit = new Visit({})
  modal.renderModal(parent)
  visit.showForm(pattern)
  modal.closeModalButton()
  handleForm()
}
