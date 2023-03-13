import { sidebarInfo } from './sidebarInfo.js'
import { sidebarMenu } from './sidebarMenu.js'

export const Sidebar = () => {
  const Sidebar = document.createElement('div')
  const sidebarContent = document.createElement('div')

  Sidebar.classList.add('sidebar')
  sidebarContent.classList.add('sidebar-content')

  Sidebar.append(sidebarContent)
  sidebarContent.append(sidebarMenu(), sidebarInfo())

  return Sidebar
}
