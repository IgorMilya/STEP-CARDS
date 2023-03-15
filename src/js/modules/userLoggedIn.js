import { find } from '../tools'
import { renderComponent } from '../tools/renderComponent.js'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { modalActions } from '../classes'

import { initScrollbar, initCharts } from '../components/Dashboard'
import { searchOptions } from './searchOtpions'
import { changeBasicLayout } from './changeBasicLayout.js'
import { getLocalData } from './localData.js'
// import { doctorsLength } from '../utils/constants'
import { testAppo } from './appo'

export const userLoggedIn = async () => {
  changeBasicLayout()
  renderComponent(Dashboard)
  searchOptions()
  modalActions()

  await getAllAppointments()

  const allData = getLocalData()

  initScrollbar()

  initCharts(allData)

  // ВАЖЛИВА ХУЙНЯ
  const test = testAppo()
}
