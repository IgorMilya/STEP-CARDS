export const resetValues = () => {
  const inputForm = document.querySelectorAll('.modal-visit__form input')
  const textareaForm = document.querySelector('.modal-visit__form textarea')
  const newForm = document.querySelector('.new-form')
  const modalImg = document.querySelector('.modal-visit__img')
  const error = document.querySelectorAll('.dropdown-error')

  inputForm.forEach(item => (item.value = ''))
  !!textareaForm && (textareaForm.values = '')
  newForm.innerHTML = ''
  modalImg.style.display = 'block'
  error.forEach(item => item.remove())
}
