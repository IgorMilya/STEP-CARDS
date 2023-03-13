import { Button } from '../UI'
import { find } from '../tools'
import { renderComponent } from './renderComponent'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { Appointment, Modal } from '../classes'
import Chart from 'chart.js/auto'

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
  
  const openModalButton = find('.register')

  await openModalButton.addEventListener('click', () => {
    const modal = new Modal()
    modal.openModal()
    // modal.closeModal()
  })


  // ========================== //

  renderComponent(Dashboard)
  // ВАЖЛИВА ХУЙНЯ
  const allAppointments = await getAllAppointments()
  allAppointments.forEach(item => {
    const appointment = new Appointment(item)
    appointment.addNewAppointment()
  })

  // ========================== //

  const ctx = document.getElementById('myChart')
  const ctx2 = document.getElementById('myChart2')
  console.log('ctx2:', ctx2)
  console.log('ctx:', ctx)

  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Cardiology', 'Dentist', 'Terapevt'],
      datasets: [
        {
          label: 'Patient',
          data: [25, 2, 40],
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        },
      ],
    },
    options: {
      responsive: false, // заборонити автоматичну зміну розміру
      maintainAspectRatio: false, // заборонити зберігання пропорцій
    },
  })

  const myDoughnutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Cardiology', 'Dentist', 'Terapevt'],
      datasets: [
        {
          label: 'Patient',
          data: [36, 2, 40],
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        },
      ],
    },
    options: {
      responsive: false, // заборонити автоматичну зміну розміру
      maintainAspectRatio: false, // заборонити зберігання пропорцій
    },
  })
}
