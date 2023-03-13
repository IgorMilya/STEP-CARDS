import { Header, Main, Sidebar } from '../layouts'
import { loginFormHandler } from '../components/Registration'
import { renderComponent } from './renderComponent'
import { Registration } from '../components'
import { changeValueCovid } from './changeValueCovid'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(Header(), Main())
  renderComponent(Registration)
  changeValueCovid()
  loginFormHandler()


  renderVisitModal(app) //temporary solution

}
