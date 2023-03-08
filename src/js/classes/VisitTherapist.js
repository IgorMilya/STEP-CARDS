import { Visit } from './Visit.js'

export class VisitTherapist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  drawAge() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` <label class='modal-visit__extra hide Therapist'>
            <input class='modal-visit__gap calendar placeholder' type='number' required placeholder='Age' >
    </label>`
    )
  }
}
