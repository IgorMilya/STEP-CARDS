import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'

export class VisitTherapist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  showAge() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` 
 ${createInput('modal-visit__extra hide Therapist', 'modal-visit__gap placeholder', 'number', 'Age')}

`
    )
  }
}
