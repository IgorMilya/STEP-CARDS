import { createInput } from '../components'
import { modifyTitle } from '../components/Dropdown/_index'

export const commonGapForm = (div, pattern) => {
  div.insertAdjacentHTML(
    'beforeend',
    `${createInput(
      'modal-visit__extra',
      'modal-visit__gap placeholder',
      'text',
      'Goal',
      `^[${pattern} 0-9]+$`,
      'goal'
    )}

    <label class='modal-visit__extra'>
       <textarea class='modal-visit__gap placeholder' name='description' id='w3review' name='w3review' rows='1' cols='50' placeholder='Description'></textarea>
    </label>
       
    ${createInput(
      'modal-visit__extra small',
      'modal-visit__gap placeholder',
      'number',
      'Tel.',
      '^[ 0-9]+$',
      'phone'
    )}
            
    <div class='modal-visit__extra dropdown small priority'>
     
        <input class='modal-visit__gap modal-visit__dropdown placeholder priority-title' name='priority' type='text' placeholder='Priority' disabled>
        <ul class='modal-visit__dropdown-list priority-list' >
             <li class='modal-visit__dropdown-item'>High</li>
             <li class='modal-visit__dropdown-item'>Normal</li>
             <li class='modal-visit__dropdown-item'>Low</li>
        </ul>
    </div>`
  )

  const priority = document.querySelector('.priority')
  const priorityTitle = document.querySelector('.priority-title')
  const priorityList = document.querySelector('.priority-list')

  priority.addEventListener('click', e => {
    priorityList.classList.toggle('menu-open')
    if (!!e.target.querySelector('.modal-visit__dropdown-item')) {
      priorityList.classList.remove('menu-open')
    }
  })
  priorityList.addEventListener('click', e => {
    modifyTitle({ target: e.target, select: priorityTitle })
  })
}
