import ky from 'ky'
import { strFinishCovid } from '../layouts/Sidebar/sidebar.utils'

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

// перенести getcoviddata в інше місце

export const getCovidData = async () => {
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
      UAConfirmed: infectedUA,
      UADeaths: deathsUA,

      worldNewConfirmed: infectedTodayWorld,
      worldConfirmed: infectedAllWorld,
      worldDeaths: deathWorld,
    }
  } else {
    return {
      UAnewConfirmed: '132',
      UAConfirmed: '212.321',
      UADeaths: '332.131.212',

      worldNewConfirmed: '433.21',
      worldConfirmed: '432.435',
      worldDeaths: '643.214.2',
    }
  }
}

export const covidData = await getCovidData()
