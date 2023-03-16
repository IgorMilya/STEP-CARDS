import { VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'
// import { resetValues } from './resetValues'
import { create } from '../tools/index.js'

export const handleForm = (value, id) => {
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
          value === 'Edit' ? await cardiologist.putRequest(id) : await cardiologist.postRequest()

          break
        case 'Dentist':
          const dentist = new VisitDentist(result)
          value === 'Edit' ? await dentist.putRequest(id) : await dentist.postRequest()

          break
        case 'Therapist':
          const therapist = new VisitTherapist(result)
          value === 'Edit' ? await therapist.putRequest(id) : await therapist.postRequest()
      }

      dropdown.forEach(item => item.setAttribute('disabled', valid))
      darkBlock.remove()
    }
  })
}
