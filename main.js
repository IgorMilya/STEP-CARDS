import './src/scss/style.scss'

import { Header, PageMain, Aside } from './src/js/layouts'
import { showBasicLayout, renderPageMain } from './src/js/modules'
import { dashBord } from './src/js/components'

const app = document.getElementById('app')
app.prepend(Header())
app.append(PageMain())

showBasicLayout()
// renderPageMain(dashBord)
