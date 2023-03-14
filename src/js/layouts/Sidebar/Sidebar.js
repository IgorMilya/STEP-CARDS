import { sidebarInfo } from './sidebarInfo.js'
import { sidebarMenu } from './sidebarMenu.js'
import { create } from '../../tools/index.js'

export const Sidebar = create('div', 'sidebar')
const sidebarContent = create('div', 'sidebar-content')
sidebarContent.append(sidebarMenu(), sidebarInfo())

Sidebar.append(sidebarContent)
