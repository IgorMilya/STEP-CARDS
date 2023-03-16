import { sidebarList, sidebarListSupport } from '../layout.utils.js'
import { createEl } from '../../tools'

export const sidebarMenu = () => {
  const sidebarMenu = createEl({ el: 'div', css: 'sidebar-menu' })

  sidebarMenu.innerHTML = `
  <div class="menu-title">Managment</div>
    <ul class="sidebar-list">
    ${sidebarList
      .map(
        ({ name, path }) =>
          ` <li class="sidebar-item"><img src='${path}' alt='menu item'/> <a href="#" class="aside-link">${name}</a>
        </li>
        `
      )
      .join('')}</ul>
     <div class="support-line"></div>
     <div class="menu-support">Supports</div>
     <ul class="sidebar-list">
        ${sidebarListSupport
          .map(
            ({ name, path }) =>
              `<li class="sidebar-item"><img src='${path}' alt='menu item'/><a href="#" class="aside-link">${name}</a></li>`
          )
          .join('')}
</ul>
`

  // TODO: rewrite on fn
  return sidebarMenu
}
