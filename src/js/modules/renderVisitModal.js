import { Modal, Visit } from '../classes'

export const renderVisitModal = parent => {
  // prettier-ignore
  const pattern = 'A-Za-zА-Яа-яЁё\\s'

  const modal = new Modal()
  const visit = new Visit({})

  modal.showModal(parent)
  modal.closeModal()
  visit.showForm(pattern)
  modal.closeModalButton()
}
