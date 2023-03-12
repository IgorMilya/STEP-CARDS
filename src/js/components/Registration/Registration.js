import { loginForm, registrationImg } from './index'
import { create } from '../../tools'

export const Registration = create('div', 'registration')
Registration.append(loginForm, registrationImg)
