import iconUA from '../../../assets/images/covid/ukraine.png'
import iconWorld from '../../../assets/images/covid/global.png'
import { covidData } from '../../tools/fetch'

const { UAnewConfirmed, UAConfirmed, UADeaths, worldNewConfirmed, worldConfirmed, worldDeaths } = covidData
export const changeCovidInfo = () => {
  const btn = document.querySelector('.covid-button')
  const covidInfo = document.querySelector('.covid-info')

  const covidNewRecovered = document.querySelector('.covid-new-recoverdet')
  const covidInfected = document.querySelector('.covid-infected')
  const covidDeaths = document.querySelector('.covid-deaths')
  const covidIconImg = document.querySelector('.covid-icon-img')
  const covidIconTitle = document.querySelector('.covid-icon-title')

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
