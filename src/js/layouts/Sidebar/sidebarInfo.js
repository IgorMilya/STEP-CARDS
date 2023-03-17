import { getCovidData } from './getCovidData'
import iconUA from '../../../assets/images/covid/ukraine.png'
import iconWorld from '../../../assets/images/covid/global.png'
import { createEl, createButton } from '../../tools'

// const { UAnewConfirmed, UAConfirmed, UADeaths, worldNewConfirmed, worldConfirmed, worldDeaths } =
//   getCovidData()

export const sidebarInfo = async () => {
  const { UAnewConfirmed, UAConfirmed, UADeaths, worldNewConfirmed, worldConfirmed, worldDeaths } =
    await getCovidData()
  console.log('UAnewConfirmed:', UAnewConfirmed)

  const sidebarInfo = createEl({ css: 'sidebar-info' })
  const sidebarCovid = createEl({ css: 'sidebar-covid' })
  const covidBody = createEl({ css: 'covid-body' })
  const covidTitle = createEl({ css: 'covid-title', text: 'Covid information' })
  const covidIcon = createEl({ css: 'covid-icon' })
  const covidIconImg = createEl({ el: 'img', css: 'covid-icon-img', src: iconUA, alt: 'Ukraine' })
  const covidIconTitle = createEl({ css: 'covid-icon-title', text: 'Ukraine' })
  const covidInfo = createEl({ css: 'covid-info' })

  const covidNewRecoverdet = createEl({
    css: 'covid-new-recoverdet',
    text: `Today indected - ${UAnewConfirmed}`,
  })
  const covidInfected = createEl({
    css: 'covid-infected',
    text: `All infected - ${UAConfirmed}`,
  })
  const covidDeaths = createEl({
    css: 'covid-deaths',
    text: `All deaths - ${UADeaths}`,
  })
  const covidButton = createButton('covid-button', 'Show World')

  const sidebarFooter = createEl({ css: 'sidebar-footer' })
  const sidebarFooterTitle = createEl({ css: 'sidebar-footer-title', text: '© HandyHealth 2023' })
  const sidebarFooterText = createEl({
    css: 'sidebar-footer-text',
    text: 'HandyHealth is medical management for all doctors, patient & Staff',
  })

  sidebarInfo.append(sidebarCovid, sidebarFooter)
  sidebarCovid.append(covidBody)
  covidBody.append(covidTitle, covidIcon, covidInfo)
  covidIcon.append(covidIconImg, covidIconTitle)
  covidInfo.append(covidNewRecoverdet, covidInfected, covidDeaths, covidButton)
  sidebarFooter.append(sidebarFooterTitle, sidebarFooterText)

  covidButton.addEventListener('click', e => {
    covidInfo.classList.toggle('world')

    if (covidInfo.classList.contains('world')) {
      covidNewRecoverdet.textContent = `Today indected - ${worldNewConfirmed}`
      covidInfected.textContent = `All infected - ${worldConfirmed}`
      covidDeaths.textContent = `All deaths - ${worldDeaths}`
      covidIconImg.src = iconWorld
      covidIconTitle.textContent = 'World'
      e.target.textContent = 'Show Ukraine'
    } else {
      covidNewRecoverdet.textContent = `Today indected - ${UAnewConfirmed}`
      covidInfected.textContent = `All infected - ${UAConfirmed}`
      covidDeaths.textContent = `All deaths - ${UADeaths}`
      covidIconImg.src = iconUA
      covidIconTitle.textContent = 'Ukraine'
      e.target.textContent = 'Show World'
    }
  })

  return sidebarInfo
}
