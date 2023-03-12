import { VisitCardiologist, VisitDentist, VisitTherapist } from '../../classes'
import { commonGapForm } from '../../layouts'

export const checkValue = (value, newForm, pattern) => {
  switch (value) {
    case 'Cardiology':
      const cardiologist = new VisitCardiologist({})
      cardiologist.showHealthInfo(newForm, pattern)
      commonGapForm(newForm, pattern)
      break
    case 'Dentist':
      const dentist = new VisitDentist({})
      dentist.showCalendar(newForm)
      commonGapForm(newForm, pattern)
      break
    case 'Therapist':
      const therapist = new VisitTherapist({})
      therapist.showAge(newForm)
      commonGapForm(newForm, pattern)
  }
}
