import './src/scss/style.scss'

import { renderLoginPage, renderComponent } from './src/js/modules'
import { Registration } from './src/js/components'
import { validateUser } from './src/js/components/Registration'

renderLoginPage()
renderComponent(Registration)
const loginButton = document.querySelector('.log-in')
loginButton.addEventListener('submit', validateUser)

// import { allDepartments, Visit } from './src/js/classes'
// import { dropdown } from './src/js/components'
// import { closeModalVisit } from './src/js/tools'
//
// const attendDoctor = new Visit()
//
// let app = document.querySelector('#app')
// app.append(attendDoctor.drawModal())
// allDepartments()
// dropdown()
// closeModalVisit()
