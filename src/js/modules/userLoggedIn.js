import { Button } from '../UI'
import { find } from '../tools'
import { renderComponent } from './renderComponent'
import { Dashboard } from '../components'
import { getAllAppointments } from './getAllAppointments'
import { Appointment, Modal } from '../classes'
import Chart from 'chart.js/auto'
import Scrollbar from 'smooth-scrollbar'
import { renderDashboardActions } from '../components/Dashboard'
import { finish } from '../components/Dashboard/dashboardActions'


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
    modal.closeModal()
  })

  // ========================== //

  renderComponent(Dashboard)

  ////////////////////////////////
  const search = document.querySelector('.search')

  search.oninput = () => {
    const appointCart = document.querySelectorAll('.appointment')
    const value = search.value.trim()

    if (value !== '') {
      appointCart.forEach(item => {
        const visitorName = item.querySelector('.name')
        const doctorName = item.querySelector('.doctor')

        if (visitorName.innerText.indexOf(value) === -1 && doctorName.innerText.indexOf(value) === -1) {
          item.style.display = 'none'
        } else {
          item.style.display = 'flex'
        }
      })
    } else {
      appointCart.forEach(item => {
        item.style.display = 'flex'
      })
    }
  }
  //////////////////////

  // ВАЖЛИВА ХУЙНЯ
  const allAppointments = await getAllAppointments()
  allAppointments.forEach(item => {
    const appointment = new Appointment(item)
    appointment.addNewAppointment()
  })
  // //////// SCROLLBAR: TODO: перенести в окрему функцію
  const dashboardList = find('.table-list')
  const scrollbarOptions = { damping: 0.02 }
  Scrollbar.init(dashboardList, scrollbarOptions)
  // ////////


  // //////// CHARTS: TODO: перенести в окрему функцію
  const ctx = document.getElementById('myChart')
  const ctx2 = document.getElementById('myChart2')

  const renderChart = (arrayForCart1, arrayForCart) => {}

  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Elderly', 'Adult', 'Child'],
      datasets: [
        {
          label: 'Age',
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
      datasets: [
        {
          label: 'Patients for Departments',
          data: [32, 23, 23],
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        },
      ],
      labels: ['Cardiology', 'Dentist', 'Terapevt'],
    },
    options: {
      responsive: false, // заборонити автоматичну зміну розміру
      maintainAspectRatio: false, // заборонити зберігання пропорцій
    },
  })

  // ========================== //

  renderDashboardActions(finish)

}
