import { Header, Main } from '../layouts'
import { showLoginForm } from '../components/Registration/showLoginForm.js'
import { changeValueCovid } from './changeValueCovid'

export const renderLoginPage = () => {
  const app = document.getElementById('app')

  app.append(Header(), Main())
  showLoginForm()

  changeValueCovid()
}
