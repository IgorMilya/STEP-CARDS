import './src/scss/style.scss'

import { renderLoginPage, renderComponent, showBasicLayout } from './src/js/modules'
import { Dashboard, Registration } from './src/js/components'
import { validateUser } from './src/js/components/Registration'
import ky from 'ky'
import { createElement } from './src/js/tools/index.js'
import { Appointment } from './src/js/classes'

renderLoginPage()
showBasicLayout()
// renderComponent(Registration)
// const loginButton = document.querySelector('.log-in')
// loginButton.addEventListener('submit', validateUser)

const testPatient = {
  id: '1',
  name: 'Leslie ',
  surname: 'Alexander',
  department: 'Dentist',
  doctor: 'Dr. Theresa Webb',
  tel: '+38097907430',
  priority: 'High',
  status: 'Open',
}

renderComponent(Dashboard)

const testAppointment = new Appointment(testPatient)
testAppointment.addNewAppointment()
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
