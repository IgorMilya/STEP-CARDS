import { create } from '../../tools/index.js'
import { cancelButton, saveButton } from '../../UI/Button'

export const createTemplate = option => {
  const darkBlock = create('div', 'dark-block')
  darkBlock.innerHTML = `
<div class='modal-visit'>
  <div class='visit-container'>
  <h1 class='modal-visit__title'>Fill in the form</h1>
  <form class='modal-visit__form'> 
  <div class='modal-visit__label-wrapper'> 
  
  </div>
  <div class='modal-visit__box-button'>
          ${cancelButton}
          ${option === 'Edit' ? '<button>Edit</button>' : saveButton}
  </div>
  
  </form>
  </div>
</div>
  `
  return darkBlock
}
