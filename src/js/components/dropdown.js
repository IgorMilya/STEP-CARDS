import { department } from '../utils/constants'
import { drawDoctorsNames, drawDepartment } from '../tools/index'
import { showDepDrop } from './departmentDrop'

export const dropdown = () => {
  const dropdown = document.querySelectorAll('.dropdown')

  drawDoctorsNames(department)

  dropdown.forEach(item => {
    const select = item.querySelector('.modal-visit__dropdown')
    const list = item.querySelector('.modal-visit__dropdown-list')
    const title = item.querySelector('.modal-visit__dropdown-title')
    const tab = item.getAttribute('data-name')

    drawDepartment(department, tab, list)

    select.addEventListener('click', () => {
      list.classList.toggle('menu-open')
    })

    list.addEventListener('click', e => {
      title.innerHTML = e.target.textContent
      list.classList.remove('menu-open')
    })
  })

  showDepDrop()
}
