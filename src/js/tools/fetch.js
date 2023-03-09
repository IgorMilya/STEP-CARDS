import ky from 'ky'

export const request = async (method, body) => {
  let data
  const PREFIX_URL = 'https://ajax.test-danit.com/api/v2/cards/'
  const DAFAULT_HEADERS = ''

  if (method === 'LOGIN') {
    const options = { method: 'POST', prefixUrl: PREFIX_URL, json: body }

    data = await ky('login', options).text()
  } else {
    const options = { method: method, prefixUrl: PREFIX_URL, json: body }
    data = await ky('login', options).json()
  }

  return data
}
