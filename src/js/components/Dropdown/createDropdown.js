export const createDropdown = (titleSelector, titleText, listSelector, name, dataAtr) => `
<div class='modal-visit__wrapper dropdown' data-name='${dataAtr}'>
   <input class='modal-visit__gap modal-visit__dropdown placeholder ${titleSelector}' name='${name}' type='text' placeholder=' ${titleText}' required disabled>
   <ul class='modal-visit__dropdown-list ${listSelector}' > </ul>
</div>
`

// export const createDropdown = (titleSelector, titleText, listSelector, name, dataAtr) => {

// const drContainer =  create("div", "modal-visit__wrapper dropdown")
// const drInput = createInput()
// const ul = create("ul", "modal-visit__dropdown-list")
// drContainer.setAtribut(data-name, '${dataAtr}')
// drContainer.append(drInput, ul)

//    return drContainer
// }
