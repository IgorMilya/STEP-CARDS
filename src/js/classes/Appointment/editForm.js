// import { createTemplate } from '../Modal/createTemplate.js'

// import { Modal } from '../Modal/Modal.js'
// import { Visit } from '../Visit/Visit.js'
// import { handleForm } from '../../components/index.js'

import { renderVisitModal } from '../../modules/index.js'

export const editForm = (department, fn, id) => {
  const app = document.getElementById('app')

  renderVisitModal(app, department, 'Edit', id)

  // department.showForm(pattern)

  const modalImg = document.querySelector('.modal-visit__img')
  const newForm = document.querySelector('.new-form')

  modalImg.style.display = 'none'

  console.log(newForm)

  fn.bind(department, ...[newForm])()

  department.commonGapForm(newForm)
}
