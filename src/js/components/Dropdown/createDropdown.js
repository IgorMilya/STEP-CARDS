export const createDropdown = (titleSelector, titleText, listSelector, dataAtr) => `
<div class='modal-visit__wrapper dropdown' data-name='${dataAtr}'>
    <div class='modal-visit__gap modal-visit__dropdown'>
         <span class='modal-visit__dropdown-title ${titleSelector}'> ${titleText}</span>
   </div>

   <ul class='modal-visit__dropdown-list ${listSelector}' > </ul>
</div>
`
