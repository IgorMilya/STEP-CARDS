import { createInput } from '../components'

export const commonGapForm = (div, pattern) => {
  div.insertAdjacentHTML(
    'beforeend',
    `${createInput(
      'modal-visit__extra',
      'modal-visit__gap placeholder',
      'text',
      'Goal',
      `^[${pattern} 0-9]+$`
    )}

    <label class='modal-visit__extra'>
       <textarea class='modal-visit__gap placeholder' id='w3review' name='w3review' rows='1' cols='50' placeholder='Description'></textarea>
    </label>
       
    ${createInput('modal-visit__extra small', 'modal-visit__gap placeholder', 'number', 'Tel.', '^[ 0-9]+$')}
            
    <div class='modal-visit__extra dropdown small'>
     
        <input class='modal-visit__gap modal-visit__dropdown placeholder' type='text' placeholder='Priority' disabled>
        <ul class='modal-visit__dropdown-list ' >
             <li class='modal-visit__dropdown-item'>High</li>
             <li class='modal-visit__dropdown-item'>Normal</li>
             <li class='modal-visit__dropdown-item'>Low</li>
        </ul>
    </div>`
  )
}
