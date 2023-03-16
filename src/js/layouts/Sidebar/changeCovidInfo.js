import iconUA from '../../../assets/images/covid/ukraine.png'
import iconWorld from '../../../assets/images/covid/global.png'
import { covidData } from './getCovidData'
import { find } from '../../tools'

const { UAnewConfirmed, UAConfirmed, UADeaths, worldNewConfirmed, worldConfirmed, worldDeaths } = covidData

export const changeCovidInfo = () => {
  const btn = find('.covid-button')
  const covidInfo = find('.covid-info')
  const covidNewRecovered = find('.covid-new-recoverdet')
  const covidInfected = find('.covid-infected')
  const covidDeaths = find('.covid-deaths')
  const covidIconImg = find('.covid-icon-img')
  const covidIconTitle = find('.covid-icon-title')

  btn.addEventListener('click', e => {
    covidInfo.classList.toggle('world')

    if (covidInfo.classList.contains('world')) {
      covidNewRecovered.textContent = `Today indected - ${worldNewConfirmed}`
      covidInfected.textContent = `All infected - ${worldConfirmed}`
      covidDeaths.textContent = `All deaths - ${worldDeaths}`
      covidIconImg.src = iconWorld
      covidIconTitle.textContent = 'World'
      e.target.textContent = 'Show Ukraine'
    } else {
      covidNewRecovered.textContent = `Today indected - ${UAnewConfirmed}`
      covidInfected.textContent = `All infected - ${UAConfirmed}`
      covidDeaths.textContent = `All deaths - ${UADeaths}`
      covidIconImg.src = iconUA
      covidIconTitle.textContent = 'Ukraine'
      e.target.textContent = 'Show World'
    }
  })
}
