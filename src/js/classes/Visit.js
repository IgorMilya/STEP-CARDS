import { Button } from '../UI/index.js'

export class Visit {
  constructor(name, phone, surname, priority, department) {
    this.name = name
    this.phone = phone
    this.surname = surname
    this.priority = priority
    this.department = department
  }

  drawModal() {
    const modalVisit = document.createElement('div')
    modalVisit.className = 'modal-visit'
    modalVisit.innerHTML = `
<div class='visit-container'>
 <h1 class='modal-visit__title'>Add card</h1>
    <form class='modal-visit__form'>
        <label class='modal-visit__wrapper'>
            <input class='modal-visit__gap placeholder' type='text' required placeholder='Enter name'>
        </label>
        <label class='modal-visit__wrapper'>
            <input class='modal-visit__gap placeholder' type='tel' pattern='[0-9]' required placeholder='Tel.'>
        </label>
        <label class='modal-visit__wrapper'>
            <input class='modal-visit__gap placeholder' type='text' required placeholder='Enter surname'>
        </label>
        
        <div class='modal-visit__wrapper dropdown'>
                <div class='modal-visit__gap modal-visit__dropdown'>
                    <span class='modal-visit__dropdown-title'> Priority</span>
                </div>
                <ul class='modal-visit__dropdown-list ' >
                    <li class='modal-visit__dropdown-item'>High</li>
                    <li class='modal-visit__dropdown-item'>Normal</li>
                    <li class='modal-visit__dropdown-item'>Low</li>
                </ul>
            </div> 
        
            <div class='modal-visit__wrapper dropdown' data-name='Department'>            
                <div class='modal-visit__gap modal-visit__dropdown '>
                    <span class='modal-visit__dropdown-title department-title'> Department</span>                  
                </div>
           
                <ul class='modal-visit__dropdown-list Department' > </ul>
            </div> 
            
            <div class='modal-visit__wrapper dropdown'>
            <div class='modal-visit__gap modal-visit__dropdown'>
                    <span class='modal-visit__dropdown-title doctor-title' > Doctor</span>       
                </div>
                
                <ul class='modal-visit__dropdown-list doctor-list'> </ul>
            </div>      
        
        
        <div class='modal-visit__button-box'>
            ${Button('modal-visit__button-cancel', 'Cancel').outerHTML}
            ${Button('modal-visit__button-save', 'Save').outerHTML}
        </div>
       
</form>


</div>
   
    `

    return modalVisit
  }
}
