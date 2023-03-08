import { LoginForm, loginImage } from '../components/Login'

export const LoginPage = document.createElement('div')
LoginPage.classList.add('visit-page-container')
LoginPage.append(LoginForm, loginImage)
