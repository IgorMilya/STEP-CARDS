import { sidebarInfo } from '../components/Sidebar/sidebarInfo'
import { sidebarMenu } from '../components/Sidebar/sidebarMenu'

export const Sidebar = () => {
  const Sidebar = document.createElement('div')
  const sidebarContent = document.createElement('div')

  Sidebar.classList.add('sidebar')
  sidebarContent.classList.add('sidebar-content')

  Sidebar.append(sidebarContent)
  sidebarContent.append(sidebarMenu(), sidebarInfo())
  // sidebarContent.append(sidebarInfo())

  return Sidebar
}
