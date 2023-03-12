import { VisitCardiologist, VisitDentist, VisitTherapist } from '../classes'

export const handleForm = () => {
  const form = document.querySelector('.modal-visit__form')

  form.addEventListener('submit', e => {
    const dropdown = document.querySelectorAll('.modal-visit__dropdown')
    e.preventDefault()
    dropdown.forEach(item => item.removeAttribute('disabled'))

    const visitData = new FormData(e.target)
    const departmentValue = document.querySelector('.department-title')
    let obj = {}

    for (let key of visitData.keys()) {
      obj[`${key}`] = `${visitData.get(key)}`
    }

    switch (departmentValue.value) {
      case 'Cardiology':
        const cardiologist = new VisitCardiologist(obj)
        console.log(cardiologist)
        break
      case 'Dentist':
        const dentist = new VisitDentist(obj)
        console.log(dentist)

        break
      case 'Therapist':
        const therapist = new VisitTherapist(obj)
        console.log(therapist)
    }

    dropdown.forEach(item => item.setAttribute('disabled', true))
  })
}
