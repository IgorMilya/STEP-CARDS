import { create } from '../../tools/index.js'

export const createTemplate = () => {
  const darkBlock = create('div', 'dark-block')
  darkBlock.innerHTML = `
<div class='modal-visit'>
  <div class='visit-container'>
  <h1 class='modal-visit__title'>Fill in the form</h1>
  
  </div>
</div>
  `
  return darkBlock
}
