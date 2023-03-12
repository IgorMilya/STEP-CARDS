export const renderDoctorsNames = department => {
  const doctorList = document.querySelector('.doctor-list ')

  department.forEach(({ department, doctor }) => {
    doctor.forEach(value => {
      const li = document.createElement('li')
      li.classList.add('modal-visit__dropdown-item', 'doctor-item', `${department}`)
      li.textContent = `${value}`
      doctorList.append(li)
    })
  })
}
