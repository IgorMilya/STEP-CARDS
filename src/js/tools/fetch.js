import ky from 'ky'
// import { renderBasicLayout } from '../modules/index.js'

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

// const getCovidData = async () => {
//   const { Countries, Global } = await ky.get('https://api.covid19api.com/summary').json()
//
//   const [{ TotalConfirmed, TotalDeaths }] = Countries.filter(elem => elem.Country === 'Ukraine')
//
//   return {
//     UAtotalConfirmed: TotalConfirmed,
//     UAtotalCDeaths: TotalDeaths,
//   }
// }
