import { asideList, asideListSupport } from '../../layouts/layoutUtils'

export const sidebarMenu = () => {
  const sidebarMenu = document.createElement('div')
  sidebarMenu.classList.add('sidebar-menu')

  sidebarMenu.innerHTML = `
  <div class="menu-title">Managment</div>
    <ul class="sidebar-list">
    ${asideList
      .map(
        ({ name, path }) =>
          ` <li class="sidebar-item">${path} <a href="#" class="aside-link">${name}</a>
        </li>
        `
      )
      .join('')}</ul>
      <div class="support-line"></div>
      <div class="menu-support">Supports</div>
      <ul class="sidebar-list">
        ${asideListSupport
          .map(
            ({ name, path }) =>
              `<li class="sidebar-item">${path}<a href="#" class="aside-link">${name}</a></li>`
          )
          .join('')}
</ul>

`

  return sidebarMenu
}
