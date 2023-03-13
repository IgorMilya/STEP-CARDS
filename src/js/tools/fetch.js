import ky from 'ky'
import { renderBasicLayout } from '../modules/index.js'
import { strFinishCovid } from './index'

// const headers = { Authorization: `Bearer 5f0ff1a4-6ffe-4191-9ec3-0de5b9a33dc9` }

export const request = async ({ url, method, token, body }) => {
  const prefixUrl = 'https://ajax.test-danit.com/api/v2/cards/'
  const headers = { Authorization: `Bearer ${token}` }
  const logOptions = { method: 'POST', prefixUrl, json: body }
  const OPTIONS = { method, prefixUrl, json: body, headers }

  try {
    return await (method === 'LOGIN' ? ky(url, logOptions).text() : ky(url, OPTIONS).json())
  } catch (err) {
    console.log(err.message)
  }
}

const getCovidData = async () => {
  const { Countries, Global } = await ky.get('https://api.covid19api.com/summary').json()

  if (Countries !== undefined) {
    const [{ NewConfirmed: newConfirmed, TotalConfirmed: allConfirmed, TotalDeaths: allDeaths }] =
      Countries.filter(elem => elem.Country === 'Ukraine')

    const {
      NewConfirmed: newConfirmedWorld,
      TotalConfirmed: allWorldConfirmed,
      TotalDeaths: allWorldDeaths,
    } = Global

    const infectedUA = strFinishCovid(allConfirmed)
    const deathsUA = strFinishCovid(allDeaths)
    const infectedTodayWorld = strFinishCovid(newConfirmedWorld)
    const infectedAllWorld = strFinishCovid(allWorldConfirmed)
    const deathWorld = strFinishCovid(allWorldDeaths)

    return {
      UAnewConfirmed: newConfirmed,
      UAallConfirmed: infectedUA,
      UAallDeaths: deathsUA,

      worldNewConfirmed: infectedTodayWorld,
      worldAllConfirmed: infectedAllWorld,
      worldAllDeaths: deathWorld,
    }
  } else {
    return {
      UAnewConfirmed: '132',
      UAallConfirmed: '212.321',
      UAallDeaths: '332.131.212',

      worldNewConfirmed: '433.21',
      worldAllConfirmed: '432.435',
      worldAllDeaths: '643.214.2',
    }
  }
}

export const covidData = await getCovidData()
