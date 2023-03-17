import { sidebarList, sidebarListSupport } from '../layout.utils'
import { createEl } from '../../tools'

export const sidebarMenu = () => {
  const sidebarMenu = createEl({ el: 'div', css: 'sidebar-menu' })
  const sidebarTitle = createEl({ el: 'div', css: 'menu-title', text: 'Managment' })
  const sidebarListManagment = createEl({ el: 'ul', css: 'sidebar-list' })
  const sidebarLine = createEl({ el: 'div', css: 'support-line' })
  const sidebarSupport = createEl({ el: 'div', css: 'menu-support', text: 'Supports' })
  const sidebarListSupports = createEl({ el: 'ul', css: 'sidebar-list' })

  const itemsManagement = sidebarList.map(({ name, path }) => {
    const sidebarItem = createEl({ el: 'li', css: 'sidebar-item' })
    const sidebarItemImg = createEl({ el: 'img', src: path, alt: 'icons' })
    const sidebarItemLink = createEl({ el: 'a', css: 'aside-link', text: name })

    sidebarItem.append(sidebarItemImg, sidebarItemLink)

    return sidebarItem
  })

  const itemsSupport = sidebarListSupport.map(({ name, path }) => {
    const sidebarItem = createEl({ el: 'li', css: 'sidebar-item' })
    const sidebarItemImg = createEl({ el: 'img', src: path, alt: 'icons' })
    const sidebarItemLink = createEl({ el: 'a', css: 'aside-link', text: name })

    sidebarItem.append(sidebarItemImg, sidebarItemLink)

    return sidebarItem
  })

  sidebarMenu.append(sidebarTitle, sidebarListManagment, sidebarLine, sidebarSupport, sidebarListSupports)
  sidebarListManagment.append(...itemsManagement)
  sidebarListSupports.append(...itemsSupport)

  return sidebarMenu
}
