import { Header, Main } from '../layouts'
import { loginFormHandler } from '../components/Registration'
import { renderComponent } from '../tools/renderComponent.js'
import { Registration } from '../components'
import { changeCovidInfo } from '../layouts/Sidebar/changeCovidInfo.js'
// import { renderVisitModal } from './renderVisitModal.js'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(Header(), Main())
  renderComponent(Registration)
  changeCovidInfo()
  loginFormHandler()
  // const app = document.getElementById('app')
  // renderVisitModal(app) //temporary solution
}
