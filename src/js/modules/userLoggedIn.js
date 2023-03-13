import { Button } from '../UI'
import { find } from '../tools'
import { renderComponent } from './renderComponent'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { Appointment } from '../classes'

export const userLoggedIn = async () => {
  const main = find('.main-content')
  const headerLogo = find('.header-logo-wrapp')
  const headerSearchInput = find('.header-search-wrap')
  const sideBar = find('.sidebar')
  const headerContent = find('.header-content')
  const headerBtnWrapper = find('.header-button')
  const headerAvatar = find('.header-avatar')
  const newPatientBtn = Button('register', 'New Patient')
  main.innerHTML = ''

  sideBar.classList.add('fade-out')
  headerLogo.classList.add('active')
  headerContent.classList.add('active')
  headerSearchInput.classList.add('fade-out')
  headerAvatar.classList.add('fade-out')
  headerBtnWrapper.innerHTML = newPatientBtn

  renderComponent(Dashboard)
  // ВАЖЛИВА ХУЙНЯ
  const allAppointments = await getAllAppointments()
  allAppointments.forEach(item => {
    const appointment = new Appointment(item)
    appointment.addNewAppointment()
  })
}
