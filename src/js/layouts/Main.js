import { Sidebar } from './Sidebar/Sidebar.js'

export const Main = () => {
  const Main = document.createElement('main')
  Main.classList.add('main')

  Main.innerHTML = `<div class="main-content"></div>`

  Main.prepend(Sidebar())

  return Main
}
