import axios from 'axios'
import { API_URL, DEFAULT_HEADERS } from '../../utils'

export const validateUser = async e => {
  e.preventDefault()
  const dataFromForm = new FormData(e.target)
  const isRemember = !!dataFromForm.get('checkbox')
  let userData

  if (isRemember) {
    userData = {
      email: 'administrator@gmail.com',
      password: 123456,
    }
  } else {
    userData = {
      email: dataFromForm.get('text'),
      password: dataFromForm.get('password'),
    }
  }

  axios.defaults.baseURL = API_URL

  const { data, status } = await axios.post('/login', userData, DEFAULT_HEADERS)

  console.log(data, status)
}
