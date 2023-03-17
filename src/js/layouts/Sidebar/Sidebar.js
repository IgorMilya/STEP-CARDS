import { sidebarInfo } from './sidebarInfo'
import { sidebarMenu } from './sidebarMenu'
import { create } from '../../tools'

export const Sidebar = create('div', 'sidebar')
const sidebarContent = create('div', 'sidebar-content')

sidebarContent.append(sidebarMenu(), await sidebarInfo())

Sidebar.append(sidebarContent)
