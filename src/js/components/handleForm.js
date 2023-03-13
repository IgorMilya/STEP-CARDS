import { VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'
import { resetValues } from './resetValues'
import { create } from '../tools/index.js'

export const handleForm = () => {
  const form = document.querySelector('.modal-visit__form')
  const darkBlock = document.querySelector('.dark-block')

  form.addEventListener('submit', async e => {
    const departmentValue = document.querySelector('.department-title')
    const dropdown = document.querySelectorAll('.modal-visit__dropdown')
    let obj = {}
    let valid = true
    e.preventDefault()

    dropdown.forEach(item => {
      if (!item.value) {
        valid = false
        const dropdownError = create('p', 'dropdown-error', 'Enter the apt value')
        item.after(dropdownError)
      }
    })
    if (valid) {
      dropdown.forEach(item => {
        item.removeAttribute('disabled')
      })
      const visitData = new FormData(e.target)
      for (let key of visitData.keys()) {
        obj[`${key}`] = `${visitData.get(key)}`
      }

      switch (departmentValue.value) {
        case 'Cardiology':
          const cardiologist = new VisitCardiologist(obj)
          const data1 = await cardiologist.postRequest()
          console.log(cardiologist)
          break
        case 'Dentist':
          const dentist = new VisitDentist(obj)
          const data2 = await dentist.postRequest()
          console.log(dentist)

          break
        case 'Therapist':
          const therapist = new VisitTherapist(obj)
          const data3 = await therapist.postRequest()
          console.log(therapist)
      }

      dropdown.forEach(item => item.setAttribute('disabled', true))
      resetValues()
      darkBlock.classList.remove('opened-modal')
    }
  })
}
