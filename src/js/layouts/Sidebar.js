import covidWord from '../../assets/images/covid/global.png'
import { asideList, asideListSupport } from './layoutUtils'

export const Sidebar = () => {
  const Sidebar = document.createElement('div')
  Sidebar.classList.add('sidebar')

  Sidebar.innerHTML = `
  <div class="sidebar-content">
  <div class="sidebar-menu">
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
  </div>
  <div class="sidebar-covid">
  <div class="covid-body">
  <div class="covid-title">Covid information</div>
  <div class="covid-icon">
  <img src="${covidWord}"/> world
  </div>
  <div class="covid-info">
  <div class="covid-infected">123213</div>
  <div class="covid-recoverdet">43214321</div>
  <div class="covid-deaths">54325</div>
  <div class="covid-button">Covid button</div>
  </div>
  </div>
  </div>
  <div class="sidebar-footer">
  <div class="sidebar-footer-title"> &copy; HandyHealth 2023</div>
  <div class="sidebar-footer-text">HandyHealth is medical management for all doctors, patient & Staff</div>
  </div>
</div>
`

  return Sidebar
}
