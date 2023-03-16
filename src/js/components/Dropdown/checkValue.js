import { VisitCardiologist, VisitDentist, VisitTherapist } from '../../classes'
// import { editForm } from '../../classes/Appointment/editForm.js'
import { renderExtraForm } from '../../classes/Appointment/renderExtraForm.js'

export const checkValue = (value, data = {}, boolean = false, id) => {
  const newForm = document.querySelector('.new-form')

  switch (value) {
    case 'Cardiology':
      const cardiologist = new VisitCardiologist(data)
      renderExtraForm(boolean, cardiologist, newForm, cardiologist.showHealthInfo, id)

      break
    case 'Dentist':
      const dentist = new VisitDentist(data)
      renderExtraForm(boolean, dentist, newForm, dentist.showCalendar, id)

      break
    case 'Therapist':
      const therapist = new VisitTherapist(data)
      renderExtraForm(boolean, therapist, newForm, therapist.showEmail, id)
  }
}
