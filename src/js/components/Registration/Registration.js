import { loginForm, registrationImg } from './index'
import { createElement } from '../../tools'

export const Registration = createElement('div', 'registration')
Registration.append(loginForm, registrationImg)
