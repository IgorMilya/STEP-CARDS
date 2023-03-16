import { createDropdown, createInput, Dropdown } from '../../components/'
import modalImg from '../../../assets/modal-visit/modalImg.svg'
import { request } from '../../tools'
import { Appointment } from '../Appointment/Appointment.js'
import { setLocalData } from '../../modules/localData.js'
import { openDropdown } from '../../components/Dropdown/openDropdown.js'
import { modifyTitle } from '../../components/Dropdown/modifyTitle.js'

export class Visit {
  constructor({
    name = '',
    surname = '',
    priority = '',
    goal = '',
    description = '',
    tel = '',
    doctor = '',
    department = '',
    age = '',
  }) {
    this.name = name
    this.surname = surname
    this.priority = priority
    this.goal = goal
    this.description = description
    this.tel = tel
    this.doctor = doctor
    this.department = department
    this.age = age
    this.status = 'Opened'
    this.pattern = 'a-zA-Zа-яА-ЯіІїЇєЄЁё\\s'
  }

  showForm() {
    const labelWrapper = document.querySelector('.modal-visit__label-wrapper')
    labelWrapper.innerHTML = `
      
         ${createInput(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter name',
           `^[${this.pattern}]+$`,
           'name',
           `${this.name}`
         )}
         ${createInput(
           'modal-visit__wrapper',
           'modal-visit__gap placeholder',
           'text',
           'Enter surname',
           `^[${this.pattern}]+$`,
           'surname',
           `${this.surname}`
         )}
        
         ${createDropdown(
           'department-title',
           'Department',
           'dropDepartment',
           'department',
           `${this.department}`,
           'Department'
         )}
         ${createDropdown('doctor-title', 'Doctor', 'doctor-list', 'doctor', `${this.doctor}`)}
         
         <div class='modal-visit__img'>
             <img src='${modalImg}' alt='Form'>
         </div>
         
         <div class='modal-visit__label-wrapper new-form'> </div>     
                    
      `

    Dropdown()

    return labelWrapper
  }

  commonGapForm = div => {
    div.insertAdjacentHTML(
      'beforeend',
      `
 ${createInput(
   'modal-visit__extra small',
   'modal-visit__gap placeholder',
   'number',
   'Age',
   ``,
   'age',
   `${this.age}`
 )}

${createInput(
  'modal-visit__extra',
  'modal-visit__gap placeholder',
  'text',
  'Goal',
  `^[${this.pattern} 0-9 .]+$`,
  'goal',
  `${this.goal}`
)}

    <label class='modal-visit__extra'>
       <textarea class='modal-visit__gap placeholder' name='description' id='w3review' name='w3review' rows='1' cols='50' placeholder='Description'>${
         this.description
       }</textarea>
    </label>
       
    ${createInput(
      'modal-visit__extra small',
      'modal-visit__gap placeholder',
      'number',
      'Tel.',
      '^[0-9 +]+$',
      'tel',
      `${this.tel}`
    )}
            
    <div class='modal-visit__extra dropdown small priorities'>
     
        <input class='modal-visit__gap modal-visit__dropdown placeholder priority-title' value='${
          this.priority
        }' name='priority' type='text' placeholder='Priority' disabled>
        <ul class='modal-visit__dropdown-list priority-list' >
             <li class='modal-visit__dropdown-item'>High</li>
             <li class='modal-visit__dropdown-item'>Normal</li>
             <li class='modal-visit__dropdown-item'>Low</li>
        </ul>
    </div>`
    )

    const priorityWrapper = document.querySelector('.priorities')
    const priorityTitle = document.querySelector('.priority-title')
    const priorityList = document.querySelector('.priority-list')

    openDropdown(priorityWrapper, priorityList)

    priorityList.addEventListener('click', e => {
      modifyTitle({ target: e.target, select: priorityTitle })
    })
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
