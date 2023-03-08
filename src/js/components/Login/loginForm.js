import googleIcon from '../../../assets/images/google.svg' // TODO: add alias import
import facebookIcon from '../../../assets/images/facebook.svg'
import { logInButton, textInput, passwordInput, checkboxInput } from '../../UI'
import { validateUser } from './validateUser'

export const LoginForm = document.createElement('div')
const formHeader = document.createElement('div')
const formBase = document.createElement('form')

LoginForm.append(formHeader, formBase)
LoginForm.classList.add('login-form')
formHeader.classList.add('form-head')
formBase.classList.add('form')

formBase.addEventListener('submit', validateUser)

formHeader.insertAdjacentHTML(
  'beforeend',
  `<div class="form-head__title">Welcome</div>
    <div class="form-head__slogan">Log in with</div>
    <div class="form-head__actions">
      <div><img src="${googleIcon}">Google</div>
      <div><img src="${facebookIcon}">Facebook</div>
    </div>
    <div class="form-head__decor">Or</div>`
)

formBase.insertAdjacentHTML(
  'beforeend',
  `${textInput}${passwordInput}
        <label class="switch">
          ${checkboxInput}<i class="slider round"></i>
          <span>Remenber me</span>
        </label>
        ${logInButton}`
)
