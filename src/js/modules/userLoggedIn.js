import { find } from '../tools'
import { renderComponent } from '../tools/renderComponent'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { modalActions } from '../classes'

import { initCharts } from '../components/Dashboard'
import { searchOptions } from './searchOtpions'
import { changeBasicLayout } from './changeBasicLayout'
import { getLocalData } from './localData'
import { create } from '../tools'
import { sortStatus } from './sortStatus'

export const userLoggedIn = async () => {
  changeBasicLayout()
  renderComponent(Dashboard)
  searchOptions()
  modalActions()

  await getAllAppointments()

  const allData = getLocalData()

  initCharts(allData)

  sortStatus()
  // ВАЖЛИВА ХУЙНЯ
}
