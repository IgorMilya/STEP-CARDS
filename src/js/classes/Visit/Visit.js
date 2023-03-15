import { cancelButton, saveButton } from '../../UI/index.js'
import { createDropdown, createInput, Dropdown } from '../../components/'
import modalImg from '../../../assets/modal-visit/modalImg.svg'
import { request } from '../../tools'
import { Appointment } from '../Appointment/Appointment.js'
import { setLocalData } from '../../modules/localData.js'

export class Visit {
  constructor({ name, surname, priority, goal, description, tel, doctor, department, age }) {
    !!name ? this.name = name : this.name = ''
    !!surname ? this.surname = surname : this.surname = ''
    !!priority ? this.priority = priority : this.priority = ''
    !!goal ? this.goal = goal : this.goal = ''
    !!description ? this.description = description : this.description = ''
    !!tel ? this.tel = tel : this.tel = ''
    !!doctor ? this.doctor = doctor : this.doctor = ''
    !!department ? this.department = department : this.department = ''
    !!age ? this.age = age : this.age = ''
    this.status = 'Opened'
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
    const res = await request({
      url: '',
      method: 'POST',
      body: this,
    })

    if (!!res) {
      const appointment = new Appointment(res)
      appointment.addNewAppointment()
      setLocalData(res)
    }
  }
}
