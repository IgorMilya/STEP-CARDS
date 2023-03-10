import { department } from '../../utils/constants.js'
import { renderDepartment } from './renderDepartment.js'
import { renderDoctorsNames } from './renderDocotrName.js'
import { showInputs } from './showInputs.js'

export const Dropdown = () => {
  const dropdown = document.querySelectorAll('.dropdown')
  const doctorTitle = document.querySelector('.doctor-title')
  renderDoctorsNames(department)

  dropdown.forEach(item => {
    const select = item.querySelector('.modal-visit__dropdown')
    const list = item.querySelector('.modal-visit__dropdown-list')
    const title = item.querySelector('.modal-visit__dropdown-title')
    const tab = item.getAttribute('data-name')

    renderDepartment(department, tab, list)

    select.addEventListener('click', () => {
      list.classList.toggle('menu-open')
    })

    list.addEventListener('click', e => {
      doctorTitle.innerHTML = 'Doctor'
      title.innerHTML = e.target.textContent
      list.classList.remove('menu-open')
    })
  })

  showInputs()
}
