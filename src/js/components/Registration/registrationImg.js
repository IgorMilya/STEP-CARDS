import regImg from '../../../assets/images/hero.svg'
import { create } from '../../tools'
export const registrationImg = create('div', 'login-image')
const img = create('img')
img.src = `${regImg}`
img.alt = 'Registration Image'

registrationImg?.append(img)
