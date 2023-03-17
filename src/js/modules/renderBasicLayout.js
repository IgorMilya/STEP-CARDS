import { Header, Main } from '../layouts'
import { renderComponent } from '../tools'
import { Registration, loginFormHandler } from '../components'
import { changeCovidInfo } from '../layouts/Sidebar/changeCovidInfo.js'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')

  app.innerHTML = ''

  app.append(Header(), Main)
  renderComponent(Registration)
  loginFormHandler()
  changeCovidInfo()
}
