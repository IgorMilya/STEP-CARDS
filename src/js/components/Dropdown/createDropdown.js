export const createDropdown = (titleSelector, titleText, listSelector, dataAtr) => `
<div class='modal-visit__wrapper dropdown' data-name='${dataAtr}'>
<input class='modal-visit__gap modal-visit__dropdown placeholder ${titleSelector}' type='text' placeholder=' ${titleText}' required disabled>
   <ul class='modal-visit__dropdown-list ${listSelector}' > </ul>
</div>
`
