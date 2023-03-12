import { create } from '../../tools'
import { boardTable } from './boardTable.js'
import { boardHeader } from './boardHeader'

export const Dashboard = create('div', 'dashboard')

const boardContent = create('div', 'board-content')
const boardActions = create('div', 'board-actions')

boardContent.append(boardTable, boardActions)
Dashboard.append(boardHeader, boardContent)
