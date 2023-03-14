import { VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'
import { resetValues } from './resetValues'

export const handleForm = () => {
  const form = document.querySelector('.modal-visit__form')
  const modalVisit = document.querySelector('.modal-visit')

  form.addEventListener('submit', async e => {
    const departmentValue = document.querySelector('.department-title')
    const visitData = new FormData(e.target)
    let obj = {}

    e.preventDefault()
    // const dropdown = document.querySelectorAll('.modal-visit__dropdown')
    //  dropdown.forEach(item => item.removeAttribute('disabled'))

    for (let key of visitData.keys()) {
      obj[`${key}`] = `${visitData.get(key)}`
    }

    switch (departmentValue.value) {
      case 'Cardiology':
        const cardiologist = new VisitCardiologist(obj)
        await cardiologist.postRequest()

        break
      case 'Dentist':
        const dentist = new VisitDentist(obj)
        await dentist.postRequest()

        break
      case 'Therapist':
        const therapist = new VisitTherapist(obj)
        await therapist.postRequest()
    }

    resetValues()
    modalVisit.classList.remove('opened-modal')
  })
}
