export const drawDoctorsNames = department => {
  const listTab = document.querySelector('.doctor-list')

  department.forEach(({ department, doctor }) => {
    doctor.forEach(value => {
      const li = document.createElement('li')
      li.classList.add('modal-visit__dropdown-item', 'doctor-item', `${department}`)
      // li.setAttribute('data-department', `${department}`)
      li.textContent = `${value}`
      listTab.append(li)
    })
  })
}
