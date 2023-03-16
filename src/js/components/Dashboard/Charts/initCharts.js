// import { create } from '../../tools'
import Chart from 'chart.js/auto'
import { filterDataCharts } from './filterDataCharts'
import { createElemCharts } from './createElemCharts'

const elemCharts = createElemCharts()

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
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Patients by Department',
        },
      },
    },
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
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Patients by Age',
        },
      },
    },
  })
}
