import { createElement, find } from '../../tools'
import { appointmentTemplate } from './appointmentTemplate'
import avatar1 from '../../../assets/images/dashboard/pacAv1.svg'
import avatar2 from '../../../assets/images/dashboard/pacAv1.svg'
const random = (a, b) => {
  const randomIndex = Math.round(Math.random())
  return randomIndex === 0 ? a : b
}

export class Appointment {
  parentElement = find('.table-list')
  constructor({ id, name, surname, department, doctor, tel, priority, status }) {
    this.id = id
    this.avatar = random(avatar1, avatar2)
    this.name = name
    this.surname = surname
    this.department = department
    this.doctor = doctor
    this.tel = tel
    this.priority = priority
    this.status = status
    this.element = createElement('div')
  }

  _renderNewAppointment() {}

  addNewAppointment() {
    const appointment = appointmentTemplate(this)
    this.parentElement.append(appointment)
  }
}
