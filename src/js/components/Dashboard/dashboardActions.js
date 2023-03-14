import { create } from '../../tools/index.js'
import Chart from 'chart.js/auto'
const arr = [
  {
    age: '17',
    bodyIndex: '2',
    department: 'Cardiology',
    description: 'ds',
    disease: 'mkom',
    doctor: 'Dr. Jacob Jones',
    goal: 'ds',
    id: 'tesy289892',
    name: 'dsa',
    pressure: 'dsa',
    priority: 'High',
    status: 'Open',
    surname: 'mkl',
    tel: '231',
  },
  {
    age: '25',
    bodyIndex: '2',
    department: 'Cardiology',
    description: 'ds',
    disease: 'mkom',
    doctor: 'Dr. Jacob Jones',
    goal: 'ds',
    id: 'tesy289892',
    name: 'dsa',
    pressure: 'dsa',
    priority: 'High',
    status: 'Open',
    surname: 'mkl',
    tel: '231',
  },
  {
    age: '51',
    bodyIndex: '2',
    department: 'Cardiology',
    description: 'ds',
    disease: 'mkom',
    doctor: 'Dr. Jacob Jones',
    goal: 'ds',
    id: 'tesy289892',
    name: 'dsa',
    pressure: 'dsa',
    priority: 'High',
    status: 'Open',
    surname: 'mkl',
    tel: '231',
  },
  {
    age: '45',
    bodyIndex: '2',
    department: 'Cardiology',
    description: 'ds',
    disease: 'mkom',
    doctor: 'Dr. Jacob Jones',
    goal: 'ds',
    id: 'tesy289892',
    name: 'dsa',
    pressure: 'dsa',
    priority: 'High',
    status: 'Open',
    surname: 'mkl',
    tel: '231',
  },
  {
    age: '12',
    bodyIndex: '2',
    department: 'Cardiology',
    description: 'ds',
    disease: 'mkom',
    doctor: 'Dr. Jacob Jones',
    goal: 'ds',
    id: 'tesy289892',
    name: 'dsa',
    pressure: 'dsa',
    priority: 'High',
    status: 'Open',
    surname: 'mkl',
    tel: '231',
  },
]
const age = arr.map(elem => +elem.age)

const [before18, before50, before100] = [
  age.filter(item => item < 18),
  age.filter(item => item >= 18 && item <= 50),
  age.filter(item => item >= 51 && item <= 100),
]
export const finish = [before100.length, before50.length, before18.length]

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

export const renderDashboardActions = (finish, dataDepartment) => {
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
          text: 'Patient by department',
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
          text: 'Patient by gender',
        },
      },
    },
    // options: {
    //   responsive: false, // заборонити автоматичну зміну розміру
    //   maintainAspectRatio: false, // заборонити зберігання пропорцій
    // },
  })
}
