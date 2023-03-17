import { createEl } from '../../../tools'

export const dashboardActions = createEl({ css: 'dashboard-actions' })

export const createElemCharts = () => {
  const dashboardTableWrapp1 = createEl({ css: 'dashboard-table-wrapp' })
  const dashboardTableWrapp2 = createEl({ css: 'dashboard-table-wrapp' })
  const boardGraphFirst = createEl({ el: 'canvas', css: 'donut' })
  const boardGraphSecond = createEl({ el: 'canvas', css: 'donut' })

  boardGraphFirst.setAttribute('id', 'myChart-1')
  boardGraphSecond.setAttribute('id', 'myChart-2')

  dashboardTableWrapp1.append(boardGraphFirst)
  dashboardTableWrapp2.append(boardGraphSecond)
  dashboardActions.append(dashboardTableWrapp1, dashboardTableWrapp2)
}
