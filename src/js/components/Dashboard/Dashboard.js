import { createElement } from '../../tools'
import { boardTable } from './boardTable.js'
import { boardHeader } from './boardHeader'

export const Dashboard = createElement('div', 'dashboard')

const boardContent = createElement('div', 'board-content')
const boardActions = createElement('div', 'board-actions')

boardContent.append(boardTable, boardActions)
Dashboard.append(boardHeader, boardContent)
