import { cancelButton, saveButton } from '../../UI/index.js'
import { createDropdown, createInput, Dropdown } from '../../components/'
import modalImg from '../../../assets/modal-visit/modalImg.svg'
import { request } from '../../tools'
import { Appointment } from '../Appointment/Appointment.js'

export class Visit {
  constructor({ name, surname, priority, goal, description, phone, doctor, department }) {
    this.name = name
    this.surname = surname
    this.priority = priority
    this.goal = goal
    this.description = description
    this.tel = phone
    this.doctor = doctor
    this.department = department
    this.status = 'Open'
  }

  showForm(pattern) {
    const visitContainer = document.querySelector('.visit-container')
    visitContainer.insertAdjacentHTML(
      'beforeend',
      `
      <form class='modal-visit__form'> 
      <div class='modal-visit__label-wrapper'> 
         ${createInput(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter name',
           `^[${pattern}]+$`,
           'name'
         )}
         ${createInput(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter surname',
           `^[${pattern}]+$`,
           'surname'
         )}
        
         ${createDropdown('department-title', 'Department', 'department', 'department', 'Department')}
         ${createDropdown('doctor-title', 'Doctor', 'doctor-list', 'doctor')}
         
         <div class='modal-visit__img'>
             <img src='${modalImg}' alt='Form'>
         </div>
         
         <div class='modal-visit__label-wrapper new-form'> </div>     
           
          </div>
          <div class='modal-visit__box-button'>
          ${cancelButton}
          ${saveButton}
          </div>
    </form>
      `
    )
    Dropdown(pattern)

    return visitContainer
  }

  async postRequest() {
    const token = localStorage.getItem('token')
    const res = await request({
      url: '',
      method: 'POST',
      token,
      body: this,
    })

    if (!!res) {
      const appointment = new Appointment(res)
      appointment.addNewAppointment()
    }
  }
}
