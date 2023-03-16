import { create } from '../../tools'
import Chart from 'chart.js/auto'

const filterDataCharts = data => {
  const age = data.map(elem => +elem.age)
  const dataDepartment = data.map(elem => elem.department)

  const [before18, before50, before100] = [
    age.filter(item => item < 18),
    age.filter(item => item >= 18 && item <= 50),
    age.filter(item => item >= 51),
  ]
  const [dentist, therapist, cardiologist] = [
    dataDepartment.filter(item => item === 'Dentistry'),
    dataDepartment.filter(item => item === 'Therapy'),
    dataDepartment.filter(item => item === 'Cardiology'),
  ]

  const arrDataAge = [before100.length, before50.length, before18.length]
  const arrDataDepartment = [dentist.length, therapist.length, cardiologist.length]

  return [arrDataAge, arrDataDepartment]
}

export const initCharts = data => {
  const [ageDataCharts, departmentDataCharts] = filterDataCharts(data)

  const donut = document.getElementById('myChart-1')
  const donut2 = document.getElementById('myChart-2')

  const myDoughnutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
      labels: ['Dentistry', 'Therapy', 'Cardiology'],
      datasets: [
        {
          label: 'Patient',
          data: departmentDataCharts,
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(255, 107, 147)', '#ffcd56'],
          borderWith: 100,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom', // переміщення мітки вниз
        },
        title: {
          display: true,
          text: 'Patients by Department',
        },
      },
    },
    // options: {
    //   // responsive: false, // заборонити автоматичну зміну розміру
    //   // maintainAspectRatio: false, // заборонити зберігання пропорцій
    // },
  })

  const myDoughnutChart2 = new Chart(donut2, {
    type: 'doughnut',
    data: {
      labels: ['Elderly', 'Adult', 'Child'],
      datasets: [
        {
          label: 'Patient',
          data: ageDataCharts,
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(255, 107, 147)', '#ffcd56'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom', // переміщення мітки вниз
        },
        title: {
          display: true,
          text: 'Patients by Age',
        },
      },
    },
    // options: {
    //   responsive: false, // заборонити автоматичну зміну розміру
    //   maintainAspectRatio: false, // заборонити зберігання пропорцій
    // },
  })
}

// ========================= //

export const dashboardActions = create('div', 'dashboard-actions')

const dashboardTableWrapp1 = create('div', 'dashboard-table-wrapp')
const dashboardTableWrapp2 = create('div', 'dashboard-table-wrapp')
const boardGraphFirst = create('canvas', 'donut')
const boardGraphSecond = create('canvas', 'donut')

boardGraphFirst.setAttribute('id', 'myChart-1')
boardGraphSecond.setAttribute('id', 'myChart-2')

dashboardActions.append(dashboardTableWrapp1, dashboardTableWrapp2)
dashboardTableWrapp1.append(boardGraphFirst)
dashboardTableWrapp2.append(boardGraphSecond)

// ========================= //
