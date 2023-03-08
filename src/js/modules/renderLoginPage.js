import { Header, PageMain } from '../layouts'
import { showLoginForm } from '../components/Login/showLoginForm.js'

export const renderLoginPage = () => {
  const app = document.getElementById('app')

  app.append(Header(), PageMain())
  showLoginForm()
}
