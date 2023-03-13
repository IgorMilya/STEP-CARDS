import { create } from '../../../tools'

export const boardActions = create('div', 'dashboard-actions')

const boardGraphFirst = create('canvas', 'dashboard-graph')
const boardGraphSecond = create('canvas', 'dashboard-graph')

boardGraphFirst.setAttribute('id', 'myChart')
boardGraphSecond.setAttribute('id', 'myChart2')

boardActions.append(boardGraphFirst, boardGraphSecond)
