import { userLoggedIn } from './userLoggedIn'
import { request } from '../tools'
export const validateUser = async e => {
  e.preventDefault()

  const dataFrom = new FormData(e.target)
  const isRemember = !!dataFrom.get('checkbox')
  const userData = { email: dataFrom.get('text'), password: dataFrom.get('password') }
  const response = await request({ url: 'login', method: 'LOGIN', body: userData })

  if (!!response && isRemember) {
    window.localStorage.setItem('token', response)
    window.localStorage.setItem('userData', JSON.stringify(userData))
    await userLoggedIn()
  }
  if (!!response && !isRemember) {
    window.localStorage.setItem('token', response)
    await userLoggedIn()
  }
}
