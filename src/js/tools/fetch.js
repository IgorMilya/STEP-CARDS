import ky from 'ky'

const headers = { Authorization: `Bearer 988ad7c6-ffba-4ec6-8646-4b22af25b1f0` }
const prefixUrl = 'https://ajax.test-danit.com/api/v2/cards/'
export const request = async (url, method, body) => {
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

  const [{ TotalConfirmed, TotalDeaths }] = Countries.filter(elem => elem.Country === 'Ukraine')

  return {
    UAtotalConfirmed: TotalConfirmed,
    UAtotalCDeaths: TotalDeaths,
  }
}
