import { Header, Main, Sidebar } from '../layouts'
import { loginFormHandler } from '../components/Registration/loginFormHandler.js'
import { renderComponent } from './renderComponent'
import { Registration } from '../components/index'

export const renderBasicLayout = () => {
  const app = document.getElementById('app')
  app.innerHTML = ''
  app.append(Header(), Main(), Sidebar())
  renderComponent(Registration)
  loginFormHandler()
}
