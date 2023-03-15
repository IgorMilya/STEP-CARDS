// import { createTemplate } from '../Modal/createTemplate.js'

export const validationChanges = (boolean, department, pattern, fn) => {
  if (!!boolean) {
    // createTemplate('Edit')

    department.showForm(pattern)

    const modalImg = document.querySelector('.modal-visit__img')
    const newForm = document.querySelector('.new-form')

    modalImg.style.display = 'none'

    fn.bind(department, ...[newForm, pattern])()

    department.commonGapForm(newForm, pattern)
  }
}
