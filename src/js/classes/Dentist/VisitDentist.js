import { Visit } from '../Visit/Visit.js'
import url from '../../../assets/modal-visit/Group 1718.svg'

export class VisitDentist extends Visit {
  constructor({ name, surname, priority, goal, description, phone, doctor, department, date }) {
    super({ name, surname, priority, goal, description, phone, doctor, department })
    this.date = date
  }

  showCalendar(div) {
    div.innerHTML = ` <label class='modal-visit__extra'>
                <input class='modal-visit__gap calendar' name='date' type='date'  >
                <div class='modal-visit__calendar-logo'> <img src='${url}' alt='calendar'></div>
            </label>`
  }
  postDentist() {
    // fetch('dasd', 'Post', this)
  }
}
