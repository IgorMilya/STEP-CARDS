import { Visit } from '../Visit/Visit.js'
import url from '../../../assets/modal-visit/Group 1718.svg'
import { createInput } from '../../components/index.js'

export class VisitDentist extends Visit {
  constructor({ name, surname, priority, goal, description, tel, doctor, department, age, date = '' }) {
    super({ name, surname, priority, goal, description, tel, doctor, department, age })
    this.date = date
  }

  showCalendar(div) {
    div.innerHTML = ` <label class='modal-visit__extra small'>
                <input class='modal-visit__gap calendar' name='date' type='date'  value='${this.date}' >
                <div class='modal-visit__calendar-logo'> <img src='${url}' alt='calendar'></div>
            </label>
`
  }
}
