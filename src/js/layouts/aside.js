import { asideList } from './layoutUtils'
import { asideListSupport } from './layoutUtils'
import covidWord from '../../assets/images/covid/global.png'
import logoImg from '../../assets/images/logo/logo-img.svg'
import logoText from '../../assets/images/logo/logo-text.svg'

export const Aside = () => {
  const Aside = document.createElement('div')
  Aside.classList.add('aside')

  Aside.innerHTML = `
  <div class="aside-content">
  <div class="aside-menu">
  <div class="menu-title">Managment</div>
    <ul class="aside-list">
    ${asideList
      .map(
        ({ name, path }) =>
          ` <li class="aside-item">${path} ${name}
        <a href="#" class="aside-link"></a>
        </li>
        `
      )
      .join('')}</ul>
      <div class="support-line"></div>
      <div class="menu-support">Supports</div>
      <ul class="aside-list">
        ${asideListSupport
          .map(
            ({ name, path }) =>
              ` <a href="#" class="aside-link">
      <li class="aside-item"> ${path} ${name}</li></a>`
          )
          .join('')}
</ul>
  </div>
  <div class="aside-covid">
  <div class="covid-body">
  <div class="covid-title">Covid informations</div>
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
  <div class="aside-footer">
  <div class="asite-footer-title"> &copy; Poli Clinic. 2023</div>
  <div class="aside-footer-text">Poli Clinic is medical management for all doctors, patient & Staff</div>
  </div>
</div>
`

  return Aside
}
