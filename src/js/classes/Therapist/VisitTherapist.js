import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitTherapist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  showAge(div) {
    div.innerHTML = ` 
 ${createInput('modal-visit__extra', 'modal-visit__gap placeholder', 'number', 'Age', `^[ 0-9]+$`)}
`
  }
}
