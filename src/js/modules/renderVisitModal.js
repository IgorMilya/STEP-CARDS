import { Modal, Visit, VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'

export const renderVisitModal = parent => {
  const modal = new Modal()
  const visit = new Visit()
  const dentist = new VisitDentist()
  const therapist = new VisitTherapist()
  const cardiology = new VisitCardiologist()

  modal.showModal(parent)
  modal.closeModal()
  visit.showForm()
  dentist.showCalendar()
  therapist.showAge()
  cardiology.showHealthInfo()
}
