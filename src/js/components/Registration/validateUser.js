import { showBasicLayout } from '../../modules'
import { request } from '../../tools'

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

  const data = await request('login', 'LOGIN', userData)

  if (!!data) {
    window.localStorage.setItem('token', data)
    window.localStorage.setItem('userData', JSON.stringify(userData))
    const localData = JSON.parse(localStorage.getItem('userData'))

    showBasicLayout()
  }
}
