import { Visit } from './Visit.js'

export class VisitDentist extends Visit {
  constructor(name, phone, surname, priority, department, date) {
    super(name, phone, surname, priority, department)
    this.date = date
  }

  drawCalendar() {}
}
