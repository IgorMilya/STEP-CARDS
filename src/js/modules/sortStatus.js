import { getLocalData } from './localData'
import { fillTableList } from './localData'

export const sortStatus = () => {
  const localData = getLocalData()
  const allFilterDashboard = document.querySelectorAll('.text')

  allFilterDashboard.forEach(elem => {
    const text = elem.textContent.trim()
    text.includes('Status') ? elem.classList.add('status') : null
  })

  const status = document.querySelector('.status')

  status.addEventListener('click', () => {
    status.classList.toggle('close')

    status.classList.contains('close')
      ? localData.sort((a, b) => b.status.localeCompare(a.status))
      : localData.sort((a, b) => a.status.localeCompare(b.status))
    fillTableList()
  })
}
