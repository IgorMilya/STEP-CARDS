import { create } from '../../tools'
import Chart from 'chart.js/auto'

const filterData = data => {
  const dataAge = data.map(elem => +elem.age)

  const [before18, before50, before100] = [
    dataAge.filter(item => item < 18),
    dataAge.filter(item => item >= 18 && item <= 50),
    dataAge.filter(item => item >= 51 && item <= 100),
  ]

  return [before100.length, before50.length, before18.length]
}

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

export const initCharts = (data, dataDepartment) => {
  const finish = filterData(data)
  const donut = document.getElementById('myChart-1')
  const donut2 = document.getElementById('myChart-2')

  const myDoughnutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
      labels: ['Cardiology', 'Dentist', 'Terapevt'],
      datasets: [
        {
          label: 'Patient',
          data: [25, 20, 40],
          backgroundColor: ['rgb(32, 164, 182)', 'rgb(54, 162, 235)', 'rgb(226 230 236)'],
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
          data: finish,
          backgroundColor: ['rgb(226 230 236)', 'rgb(32, 164, 182)', 'rgb(54, 162, 235)'],
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
