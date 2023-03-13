import { department } from '../../utils/constants.js'
import { renderDepartment } from './renderDepartment.js'
import { renderDoctorsNames } from './renderDocotrName.js'
import { showDoctor } from './showDoctor.js'
import { modifyTitle } from './modifyTitle.js'
import { checkValue } from './checkValue.js'
import { openDropdown } from './openDropdown.js'

export const Dropdown = pattern => {
  const dropdown = document.querySelectorAll('.dropdown')
  const doctorTitle = document.querySelector('.doctor-title')
  const modalImg = document.querySelector('.modal-visit__img')
  const newForm = document.querySelector('.new-form')

  renderDoctorsNames(department)

  dropdown.forEach(item => {
    const select = item.querySelector('.modal-visit__dropdown')
    const list = item.querySelector('.modal-visit__dropdown-list')
    const tab = item.getAttribute('data-name')

    renderDepartment(department, tab, list)

    openDropdown(item, list)

    list.addEventListener('click', e => {
      modifyTitle({ img: modalImg, target: e.target, select: select, title: doctorTitle })
      checkValue(select.value, newForm, pattern)
    })
  })
  showDoctor()
}
