import { create } from '../../tools/index.js'

export const dashboardActions = create('div', 'dashboard-actions')

const boardGraphFirst = create('canvas', 'dashboard-graph')
const boardGraphSecond = create('canvas', 'dashboard-graph')

boardGraphFirst.setAttribute('id', 'myChart')
boardGraphSecond.setAttribute('id', 'myChart2')

dashboardActions.append(boardGraphFirst, boardGraphSecond)
