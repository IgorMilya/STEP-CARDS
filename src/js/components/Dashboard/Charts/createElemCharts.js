import { create } from '../../../tools'

export const dashboardActions = create('div', 'dashboard-actions')

export const createElemCharts = () => {
  const dashboardTableWrapp1 = create('div', 'dashboard-table-wrapp')
  const dashboardTableWrapp2 = create('div', 'dashboard-table-wrapp')
  const boardGraphFirst = create('canvas', 'donut')
  const boardGraphSecond = create('canvas', 'donut')

  boardGraphFirst.setAttribute('id', 'myChart-1')
  boardGraphSecond.setAttribute('id', 'myChart-2')

  dashboardTableWrapp1.append(boardGraphFirst)
  dashboardTableWrapp2.append(boardGraphSecond)
  dashboardActions.append(dashboardTableWrapp1, dashboardTableWrapp2)
}
