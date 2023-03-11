import regImg from '../../../assets/images/hero.svg'
import { createElement } from '../../tools/index.js'
export const registrationImg = createElement('div', 'login-image')
const img = createElement('img')
img.src = `${regImg}`
img.alt = 'Registration Image'

registrationImg.append(img)
