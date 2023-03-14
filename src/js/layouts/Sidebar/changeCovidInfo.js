import { covidData } from '../../tools/index.js'
import iconUA from '../../../assets/images/covid/ukraine.png'
import iconWorld from '../../../assets/images/covid/global.png'

const { UAnewConfirmed, UAallConfirmed, UAallDeaths, worldNewConfirmed, worldAllConfirmed, worldAllDeaths } =
  covidData

export const changeCovidInfo = () => {
  const btn = document.querySelector('.covid-button')
  const covidInfo = document.querySelector('.covid-info')

  const covidNewRecoverdet = document.querySelector('.covid-new-recoverdet')
  const covidInfected = document.querySelector('.covid-infected')
  const covidDeaths = document.querySelector('.covid-deaths')
  const covidIconImg = document.querySelector('.covid-icon-img')
  const covidIconTitle = document.querySelector('.covid-icon-title')

  btn.addEventListener('click', e => {
    covidInfo.classList.toggle('world')

    if (covidInfo.classList.contains('world')) {
      covidNewRecoverdet.textContent = `Today indected - ${worldNewConfirmed}`
      covidInfected.textContent = `All infected - ${worldAllConfirmed}`
      covidDeaths.textContent = `All deaths - ${worldAllDeaths}`
      covidIconImg.src = iconWorld
      covidIconTitle.textContent = 'World'
      e.target.textContent = 'Show Ukraine'
    } else {
      covidNewRecoverdet.textContent = `Today indected - ${UAnewConfirmed}`
      covidInfected.textContent = `All infected - ${UAallConfirmed}`
      covidDeaths.textContent = `All deaths - ${UAallDeaths}`
      covidIconImg.src = iconUA
      covidIconTitle.textContent = 'Ukraine'
      e.target.textContent = 'Show World'
    }
  })
}
