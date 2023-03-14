import { Header, Main } from '../layouts'
import { loginFormHandler } from '../components/Registration'
import { renderComponent } from './renderComponent'
import { Registration } from '../components'
import { changeValueCovid } from './changeValueCovid'
import { renderVisitModal } from './renderVisitModal.js'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(Header(), Main())
  renderComponent(Registration)
  changeValueCovid()
  loginFormHandler()
  // await userLoggedIn() //temporary solution
  renderVisitModal(app) //temporary solution
}
