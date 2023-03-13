import { createInput } from '../../components/index.js'
import { modifyTitle } from '../../components/Dropdown/_index.js'
import { openDropdown } from '../../components/Dropdown/_index.js'

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
            
    <div class='modal-visit__extra dropdown small priorities'>
     
        <input class='modal-visit__gap modal-visit__dropdown placeholder priority-title' name='priority' type='text' placeholder='Priority'>
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
