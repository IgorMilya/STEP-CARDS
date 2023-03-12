import { create } from '../../tools'
import { tableHeaders } from './dashboard.utils'

export const boardTable = create('div', 'board-table')
const tableTitle = create('div', 'table-title', 'Appointment Activity')
const tableHead = create('div', 'table-head')
const tableList = create('div', 'table-list')
const tablePagination = create('div', 'table-pagination')

const headers = tableHeaders.map(text => create('div', 'text', `${text}`))
tableHead.append(...headers)

// let num = Math.ceil(100 / 8)
//
// const leftArrow = createElement('div', 'leftArrow')
// const rightArrow = createElement('div', 'rightArrow')
// const tabs = num.map(tab => createElement('div', 'tab'))

boardTable.append(tableTitle, tableHead, tableList, tablePagination)
