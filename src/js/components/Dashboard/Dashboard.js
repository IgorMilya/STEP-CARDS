import { create } from '../../tools'
import { dashboardTable } from './dashboardTable.js'
import { dashboardHeader } from './dashboardHeader.js'
import { boardActions } from './dashboardActions'

export const Dashboard = create('div', 'dashboard')

const boardContent = create('div', 'board-content')

boardContent.append(dashboardTable, boardActions)
Dashboard.append(dashboardHeader, boardContent)
