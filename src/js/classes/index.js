export { Visit } from './Visit'
import { VisitDentist } from './VisitDentist'
import { VisitCardiologist } from './VisitCardiologist'
import { VisitTherapist } from './VisitTherapist'

export const allDepartments = () => {
  const dentist = new VisitDentist()
  dentist.drawCalendar()

  const cardiologist = new VisitCardiologist()
  cardiologist.drawHealthInfo()

  const therapist = new VisitTherapist()
  therapist.drawAge()
}
