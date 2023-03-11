import { createElement } from '../../tools'
import { tableHeaders } from './dashboard.utils'

export const boardTable = createElement('div', 'board-table')
const tableTitle = createElement('div', 'table-title', 'Appointment Activity')
const tableHead = createElement('div', 'table-head')
const tableList = createElement('div', 'table-list')
const tablePagination = createElement('div', 'table-pagination')

const headers = tableHeaders.map(text => createElement('div', 'text', `${text}`))
tableHead.append(...headers)

// let num = Math.ceil(100 / 8)
//
// const leftArrow = createElement('div', 'leftArrow')
// const rightArrow = createElement('div', 'rightArrow')
// const tabs = num.map(tab => createElement('div', 'tab'))

boardTable.append(tableTitle, tableHead, tableList, tablePagination)
