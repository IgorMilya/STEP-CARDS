import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitTherapist extends Visit {
  constructor({ name, surname, priority, goal, description, phone, doctor, department, age }) {
    super({ name, surname, priority, goal, description, phone, doctor, department, age })
  }

  showAge(div) {
    div.innerHTML = ` 
 ${createInput('modal-visit__extra', 'modal-visit__gap placeholder', 'number', 'Age', `^[ 0-9]+$`, 'age')}
`
  }
}
