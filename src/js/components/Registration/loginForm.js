import googleIcon from '../../../assets/images/google.svg' // TODO: add alias import
import facebookIcon from '../../../assets/images/facebook.svg'
import { logInButton, checkboxInput } from '../../UI'
import { validateUser } from '../../modules/validateUser'
import { create } from '../../tools'

const isData = JSON.parse(localStorage.getItem('userData'))
const textInput = `<input class='email' type='text' name='text' placeholder='Email' value='${
  isData?.email || ''
}' >`
const passwordInput = `<input class='password' type='password' name='password' placeholder='Password' value='${
  isData?.password || ''
}' >`
export const loginForm = create('div', 'login-form')

const formHeader = create('div', 'form-head')
const formBase = create('form', 'form')

formBase.addEventListener('submit', validateUser)

const title = create('div', 'form-head__title', 'Welcome')
const slogan = create('div', 'form-head__slogan', 'Log in with')
const actions = create('div', 'form-head__actions')
const decor = create('div', 'form-head__decor', 'Or')

actions.innerHTML = `
        <div><img src="${googleIcon}">Google</div>
        <div><img src="${facebookIcon}">Facebook</div>`

formBase.insertAdjacentHTML(
  'beforeend',
  `${textInput}${passwordInput}
        <label class="switch">
          ${checkboxInput}<i class="slider round"></i>
          <span>Remenber me</span>
        </label>
        ${logInButton}`
)

formHeader.append(title, slogan, actions, decor)
loginForm.append(formHeader, formBase)
