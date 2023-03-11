import axios from 'axios'
import { API_URL, DEFAULT_HEADERS } from '../../utils'
import { showBasicLayout } from '../../modules'

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

  if (status === 200) {
    showBasicLayout()
  }
}
