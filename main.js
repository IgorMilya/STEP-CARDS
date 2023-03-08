import './src/scss/style.scss'
import { LoginPage } from './src/js/layouts'
import { renderLoginPage, showBasicLayout, renderComponent } from './src/js/modules'
import { validateUser } from './src/js/components/Login'

renderLoginPage()
renderComponent(LoginPage)
const loginButton = document.querySelector('.log-in')
loginButton.addEventListener('submit', validateUser)

// logInButton.addEventListener('click', validateUser)
// showBasicLayout()
// import { VisitPage } from './src/js/layouts'
//
// import { allDepartments, Visit } from './src/js/classes'
// import { dropdown } from './src/js/components'
// import { closeModalVisit } from './src/js/tools'
//
// const attendDoctor = new Visit()
//
//
// app.append(attendDoctor.drawModal())
// allDepartments()
// dropdown()
// closeModalVisit()
// app.append(VisitPage)
// // app.prepend(Header())
// // app.append(PageMain())
//
//
//
//
//
