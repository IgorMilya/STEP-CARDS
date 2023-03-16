import { loginForm } from './index'
import { create, createEl } from '../../tools'
import regImg from '../../../assets/images/hero.svg'

export const Registration = create('div', 'registration')

const registrationImg = createEl({ el: 'div', css: 'login-image' })
const img = createEl({ el: 'img', src: regImg, alt: 'Registration Image' })

registrationImg.append(img)
Registration.append(loginForm, registrationImg)
