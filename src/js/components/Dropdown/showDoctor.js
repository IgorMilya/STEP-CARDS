import { find, findAll } from '../../tools'

export const showDoctor = () => {
  const depList = find('.dropDepartment')

  depList.addEventListener('click', e => {
    const listItem = findAll('.doctor-item')
    const itemTabPost = e.target.getAttribute('data-post')

    listItem.forEach(value => {
      value.className.includes(itemTabPost) ? (value.style.display = 'block') : (value.style.display = 'none')
    })
  })
}
