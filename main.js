import './src/scss/style.scss'
import { Header, PageMain, Aside } from './src/js/layouts'
import { showBasicLayout, renderPageMain } from './src/js/modules'
import { VisitPage } from './src/js/layouts'

const app = document.getElementById('app')

app.append(VisitPage)
// app.prepend(Header())
// app.append(PageMain())

// showBasicLayout()








