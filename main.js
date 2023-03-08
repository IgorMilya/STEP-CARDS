import './src/scss/style.scss'

import { Header, PageMain, Aside } from './src/js/layouts'
import { showBasicLayout, renderPageMain } from './src/js/modules'
import { VisitPage } from './src/js/layouts'

import { allDepartments, Visit } from './src/js/classes'
import { dropdown } from './src/js/components'
import { closeModalVisit } from './src/js/tools'

const attendDoctor = new Visit()
const app = document.getElementById('app')

app.append(attendDoctor.drawModal())
allDepartments()
dropdown()
closeModalVisit()
app.append(VisitPage)
// app.prepend(Header())
// app.append(PageMain())

// showBasicLayout()








