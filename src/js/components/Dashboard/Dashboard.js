import { create } from '../../tools'
import { boardTable } from './boardTable'
import { boardHeader } from './boardHeader'
import { boardActions } from './dashboardActions'

export const Dashboard = create('div', 'dashboard')

const boardContent = create('div', 'board-content')

boardContent.append(boardTable, boardActions)
Dashboard.append(boardHeader, boardContent)
