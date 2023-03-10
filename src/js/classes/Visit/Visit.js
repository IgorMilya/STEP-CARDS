import { cancelButton, saveButton } from '../../UI/index.js'
import { createInput, createDropdown, Dropdown } from '../../components/'

export class Visit {
  constructor(name, phone, surname, priority, department) {
    this.name = name
    this.phone = phone
    this.surname = surname
    this.priority = priority
    this.department = department
  }

  showForm() {
    const visitContainer = document.querySelector('.visit-container')
    visitContainer.insertAdjacentHTML(
      'beforeend',
      `
      <form class='modal-visit__form'>     
         ${createInput('modal-visit__wrapper', 'modal-visit__gap placeholder', 'text', 'Enter name')}
         ${createInput('modal-visit__wrapper', 'modal-visit__gap placeholder', 'text', 'Enter surname')}
        
         ${createDropdown('', 'Department', 'department', 'Department')}
         ${createDropdown('doctor-title', 'Doctor', 'doctor-list')}
         ${createInput('modal-visit__extra All hide', 'modal-visit__gap placeholder', 'text', 'Goal')}

         <label class='modal-visit__extra All hide'>
            <textarea class='modal-visit__gap placeholder' id='w3review' name='w3review' rows='1' cols='50' placeholder='Description'></textarea>
         </label>
            
         ${createInput(
           'modal-visit__extra All hide small',
           'modal-visit__gap placeholder',
           'number',
           'Tel.',
           '[0-9]'
         )}
            
          <div class='modal-visit__extra dropdown All hide small'>
              <div class='modal-visit__gap modal-visit__dropdown'>
                   <span class='modal-visit__dropdown-title'> Priority</span>
              </div>
              <ul class='modal-visit__dropdown-list ' >
                   <li class='modal-visit__dropdown-item'>High</li>
                   <li class='modal-visit__dropdown-item'>Normal</li>
                   <li class='modal-visit__dropdown-item'>Low</li>
              </ul>
          </div>
          ${cancelButton}
          ${saveButton}
    </form>
      `
    )
    Dropdown()
    return visitContainer
  }
}
