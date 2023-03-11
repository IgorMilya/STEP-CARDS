import './src/scss/style.scss'
import { LoginPage } from './src/js/layouts'
import { renderLoginPage, showBasicLayout, renderComponent } from './src/js/modules'
import { validateUser } from './src/js/components/Login'
import { renderVisitModal } from './src/js/modules'
import { VisitCardiologist } from './src/js/classes/index.js'

renderLoginPage()
renderComponent(LoginPage)
const loginButton = document.querySelector('.log-in')
loginButton.addEventListener('submit', validateUser)

// logInButton.addEventListener('click', validateUser)
// showBasicLayout()
// import { VisitPage } from './src/js/layouts'
//
const pageBody = document.querySelector('.main')
renderVisitModal(pageBody)
const form = document.querySelector('.modal-visit__form')


///////////////////////////////
const dropdown = document.querySelectorAll('.modal-visit__dropdown')
form.addEventListener('submit', e => {
  e.preventDefault()

  dropdown.forEach(item => item.removeAttribute('disabled'))

  const visitData = new FormData(e.target)
  let obj = {}

  for (let key of visitData.keys()) {
    obj[`${key}`] = `${visitData.get(key)}`
  }
  console.log(obj)

  const cardiology = new VisitCardiologist(obj)
  console.log(cardiology)

  dropdown.forEach(item => item.setAttribute('disabled', true))
})

// app.append(VisitPage)
// // app.prepend(Header())
// // app.append(PageMain())
