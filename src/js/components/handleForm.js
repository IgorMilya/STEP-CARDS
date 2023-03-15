import { VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'
import { resetValues } from './resetValues'
import { create } from '../tools/index.js'

export const handleForm = () => {
  const form = document.querySelector('.modal-visit__form')
  const darkBlock = document.querySelector('.dark-block')

  form.addEventListener('submit', async e => {
    e.preventDefault()

    const departmentValue = document.querySelector('.department-title')
    const dropdown = document.querySelectorAll('.modal-visit__dropdown')
    const result = {}
    let valid = true

    dropdown.forEach(item => {
      if (!item.value) {
        const dropdownError = create('p', 'dropdown-error', 'Enter the apt value')
        valid = false

        item.after(dropdownError)
      }
    })

    if (valid) {
      dropdown.forEach(item => item.removeAttribute('disabled'))
      const visitData = new FormData(e.target)

      for (const [key, value] of visitData.entries()) result[key] = value

      switch (departmentValue.value) {
        case 'Cardiology':
          const cardiologist = new VisitCardiologist(result)
          await cardiologist.postRequest()

          break
        case 'Dentist':
          const dentist = new VisitDentist(result)
          await dentist.postRequest()

          break
        case 'Therapist':
          const therapist = new VisitTherapist(result)
          await therapist.postRequest()
      }

      dropdown.forEach(item => item.setAttribute('disabled', valid))
      resetValues()
      darkBlock.classList.remove('opened-modal')
    }
  })
}
