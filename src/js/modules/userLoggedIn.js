import { renderComponent } from '../tools/renderComponent'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { modalActions } from '../classes'
import { initFilters } from '../components/Dashboard/filters.js'
import { initCharts } from '../components/Dashboard'
import { searchOptions } from './searchOtpions'
import { changeBasicLayout } from './changeBasicLayout'
import { getLocalData } from './localData'

export const userLoggedIn = async () => {
  changeBasicLayout()
  renderComponent(Dashboard)
  searchOptions()
  modalActions()

  await getAllAppointments()

  const allData = getLocalData()

  initFilters()
  initCharts(allData)
  // ВАЖЛИВА ХУЙНЯ
}
