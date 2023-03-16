import { VisitCardiologist, VisitDentist, VisitTherapist } from '../../classes'
import { renderExtraForm } from '../../classes/Appointment/renderExtraForm.js'
import { find } from '../../tools/index.js'

export const checkValue = (value, data = {}, boolean = false, id) => {
  const newForm = find('.new-form')

  switch (value) {
    case 'Cardiology':
      const cardiologist = new VisitCardiologist(data)
      renderExtraForm(boolean, cardiologist, newForm, cardiologist.showHealthInfo, id)

      break
    case 'Dentistry':
      const dentist = new VisitDentist(data)
      renderExtraForm(boolean, dentist, newForm, dentist.showCalendar, id)

      break
    case 'Therapy':
      const therapist = new VisitTherapist(data)
      renderExtraForm(boolean, therapist, newForm, therapist.showEmail, id)
  }
}
