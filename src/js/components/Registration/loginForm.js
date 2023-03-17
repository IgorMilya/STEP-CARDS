import { validateUser } from './validateUser'
import { createEl } from '../../tools'
import { registrationUtils } from './registration.utils'

export const loginForm = createEl({ css: 'login-form' })
const { googleIcon, facebookIcon, toggleCheckbox, passwordInput, emailInput, loginButton } = registrationUtils
const formHeader = createEl({ css: 'form-head' })
const formBase = createEl({ el: 'form', css: 'form' })

const title = createEl({ css: 'form-head__title', text: 'Welcome' })
const slogan = createEl({ css: 'form-head__slogan', text: 'Log in with' })
const actions = createEl({ css: 'form-head__actions' })
const decor = createEl({ css: 'form-head__decor', text: 'Or' })

actions.innerHTML = `
        <div><img src="${googleIcon}" alt='Google'>Google</div>
        <div><img src="${facebookIcon}" alt='Facebook'>Facebook</div>`

formHeader.append(title, slogan, actions, decor)

const rememberToggle = createEl({ el: 'label', css: 'switch' })
const toggleDecor = createEl({ el: 'i', css: 'slider' })
const toggleText = createEl({ el: 'span', text: 'Remember me' })

rememberToggle.append(toggleCheckbox, toggleDecor, toggleText)

formBase.addEventListener('submit', validateUser)
formBase.append(emailInput, passwordInput, rememberToggle, loginButton)

loginForm.append(formHeader, formBase)
