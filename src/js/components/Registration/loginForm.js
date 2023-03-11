import googleIcon from '../../../assets/images/google.svg' // TODO: add alias import
import facebookIcon from '../../../assets/images/facebook.svg'
import { logInButton, textInput, passwordInput, checkboxInput } from '../../UI'
import { validateUser } from './validateUser'
import { createElement } from '../../tools'

export const loginForm = createElement('div', 'login-form')

const formHeader = createElement('div', 'form-head')
const formBase = createElement('form', 'form')

formBase.addEventListener('submit', validateUser)

const title = createElement('div', 'form-head__title', 'Welcome')
const slogan = createElement('div', 'form-head__slogan', 'Log in with')
const actions = createElement('div', 'form-head__actions')
const decor = createElement('div', 'form-head__decor', 'Or')

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
