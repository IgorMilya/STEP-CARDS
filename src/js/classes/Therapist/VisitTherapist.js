import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitTherapist extends Visit {
  constructor({ name, surname, priority, goal, description, phone, doctor, department, age, email }) {
    super({ name, surname, priority, goal, description, phone, doctor, department, age })
    this.email = email
  }

  showAge(div) {
    div.innerHTML = ` 
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'email',
   'Email',
   `.+@gmail\\.com`,
   'email'
 )}
`
  }
}
