import { VisitCardiologist, VisitDentist, VisitTherapist } from '../../classes'
import { validationChanges } from '../../classes/Appointment/validationChanges.js'

export const checkValue = (value, pattern, data = {}, boolean = false) => {
  const newForm = document.querySelector('.new-form')

  switch (value) {
    case 'Cardiology':
      const cardiologist = new VisitCardiologist(data)
      validationChanges(boolean, cardiologist, pattern, cardiologist.showHealthInfo)

      cardiologist.showHealthInfo(newForm, pattern)
      cardiologist.commonGapForm(newForm, pattern)
      break
    case 'Dentist':
      const dentist = new VisitDentist(data)
      validationChanges(boolean, dentist, pattern, dentist.showCalendar)

      dentist.showCalendar(newForm)
      dentist.commonGapForm(newForm, pattern)
      break
    case 'Therapist':
      const therapist = new VisitTherapist(data)
      validationChanges(boolean, therapist, pattern, therapist.showEmail)

      therapist.showEmail(newForm)
      therapist.commonGapForm(newForm, pattern)
  }
}
