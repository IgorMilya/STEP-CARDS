import { department } from '../utils/constants.js'
import { VisitDentist } from '../classes/index.js'

export const dropdown = () => {
  const dropdown = document.querySelectorAll('.dropdown')
  const listTab = document.querySelector('.doctor-list')

  department.forEach(({ department, doctor }) => {
    doctor.forEach(value => {
      const li = document.createElement('li')
      li.classList.add('modal-visit__dropdown-item', 'doctor-item')
      li.setAttribute('data-department', `${department}`)
      li.textContent = `${value}`
      listTab.append(li)
    })
  })

  dropdown.forEach(item => {
    const select = item.querySelector('.modal-visit__dropdown')
    const list = item.querySelector('.modal-visit__dropdown-list')
    const title = item.querySelector('.modal-visit__dropdown-title')
    const tab = item.getAttribute('data-name')

    if (tab === 'Department') {
      department.forEach(({ department }) => {
        const li = document.createElement('li')
        li.classList.add('modal-visit__dropdown-item')
        li.textContent = `${department}`
        list.append(li)
      })
    }

    select.addEventListener('click', () => {
      list.classList.toggle('menu-open')
    })

    list.addEventListener('click', e => {
      title.innerHTML = e.target.textContent
      list.classList.remove('menu-open')

      const listItem = document.querySelectorAll('.doctor-item')
      const departmentTitle = document.querySelector('.department-title')

      listItem.forEach(value => {
        const itemTab = value.getAttribute('data-department')
        itemTab === departmentTitle.textContent
          ? (value.style.display = 'block')
          : (value.style.display = 'none')
      })
    })
  })
}
