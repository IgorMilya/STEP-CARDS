import { create } from '../../tools'
import { dashboardTable } from './dashboardTable'
import { dashboardHeader } from './dashboardHeader'
import { dashboardActions } from './Charts/createElemCharts'

export const Dashboard = create('div', 'dashboard')

const boardContent = create('div', 'dashboard-content')

boardContent.append(dashboardTable, dashboardActions)
Dashboard.append(dashboardHeader, boardContent)
