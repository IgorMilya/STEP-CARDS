import { Visit } from '../Visit/Visit.js'
import { createInput } from '../../components'
import url from '../../../assets/modal-visit/Group 1718.svg'

export class VisitDentist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  showCalendar() {
    const extra = document.querySelector('.modal-visit__extra')
    extra.insertAdjacentHTML(
      'beforebegin',
      ` <label class='modal-visit__extra hide Dentist '>
                <input class='modal-visit__gap calendar' type='date' required >
                <div class='modal-visit__calendar-logo'> <img src='${url}' alt='calendar'></div>
            </label>
            
<!-- ${createInput('modal-visit__extra hide Dentist', 'modal-visit__gap calendar', 'date')}-->
`
    )
  }
}
