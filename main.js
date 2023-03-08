import './src/scss/style.scss'
import { allDepartments, Visit } from './src/js/classes'
import { dropdown } from './src/js/components'
import { closeModalVisit } from './src/js/tools'

const attendDoctor = new Visit()

document.querySelector('#app').append(attendDoctor.drawModal())
allDepartments()
dropdown()
closeModalVisit()
