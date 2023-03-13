import { doc } from 'prettier'
import { covidButton } from '../../UI/Button.js'
import { covidData } from '../../tools/index.js'
import iconUA from '../../../assets/images/covid/ukraine.png'

const { UAnewConfirmed, UAallConfirmed, UAallDeaths } = covidData

export const sidebarInfo = () => {
  const sidebarInfo = document.createElement('div')
  sidebarInfo.classList.add('sidebar-info')

  sidebarInfo.innerHTML = `
     
     <div class="sidebar-covid">
     <div class="covid-body">
     <div class="covid-title">Covid information</div>
      <div class="covid-icon">
      <img class="covid-icon-img" src = '${iconUA}'>
      <div class="covid-icon-title">Ukraine</div>
      </div>
      
     <div class="covid-info">
     <div class="covid-new-recoverdet">Today indected - ${UAnewConfirmed}</div>
     <div class="covid-infected">All infected - ${UAallConfirmed}</div>
     <div class="covid-deaths">All deaths - ${UAallDeaths}</div>
     <div class="covid-button">${covidButton}</div>
     </div>
     </div>
     </div>
     
     <div class="sidebar-footer">
     <div class="sidebar-footer-title"> &copy; HandyHealth 2023</div>
     <div class="sidebar-footer-text">HandyHealth is medical management for all doctors, patient & Staff</div>
     </div>
     </div>`

  return sidebarInfo
}