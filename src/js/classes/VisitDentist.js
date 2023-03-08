import { Visit } from './Visit.js'

export class VisitDentist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  drawCalendar() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` <label class='modal-visit__extra hide Dentist '>
            <input class='modal-visit__gap calendar' type='date' required >
    </label>`
    )
  }
}
