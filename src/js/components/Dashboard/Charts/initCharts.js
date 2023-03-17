import Chart from 'chart.js/auto'
import { filterDataCharts } from './filterDataCharts'
import { createElemCharts } from './createElemCharts'
import { find } from '../../../tools'

createElemCharts()

export const initCharts = data => {
  const [ageDataCharts, departmentDataCharts] = filterDataCharts(data)

  const firstChart = find('#myChart-1')
  const secondChart = find('#myChart-2')

  new Chart(firstChart, {
    type: 'doughnut',
    data: {
      labels: ['Dentistry', 'Therapy', 'Cardiology'],
      datasets: [
        {
          label: 'Patient',
          data: departmentDataCharts,
          backgroundColor: ['#20a4b6', '#ff6b93', '#ffcd56'],
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

  new Chart(secondChart, {
    type: 'doughnut',
    data: {
      labels: ['Elderly', 'Adult', 'Child'],
      datasets: [
        {
          label: 'Patient',
          data: ageDataCharts,
          backgroundColor: ['#20a4b6', '#ff6b93', '#ffcd56'],
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
