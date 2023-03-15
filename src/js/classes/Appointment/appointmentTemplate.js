import { create } from '../../tools'
import { tableActionsIcons } from './appointment.utils'
export const appointmentTemplate = props => {
  const { htmlElement, avatar, name, surname, department, doctor, tel, priority, status } = props

  const actions = create('div', 'actions')
  const clientName = create('div', 'name', `${name} ${surname}`)
  const imgWrap = create('div', 'avatar')
  const statusColor = status === 'Closed' ? 'status-close' : 'status'
  imgWrap.innerHTML = `<img src = '${avatar}' alt = 'Client avatar' />`

  const appointmentContent = [
    create('div', 'department', `${department}`),
    create('div', 'doctor', `${doctor}`),
    create('div', 'tel', `${tel}`),
    create('div', 'priority', `${priority}`),
    create('div', `${statusColor}`, `${status}`),
  ]

  const tableIcons = tableActionsIcons.map(({ title, path }) => {
    const container = create('span', `icon-container`)
    container.innerHTML = `<img class='icon-${title.toLowerCase()}' src ='${path}' alt ='${title} icon' title ='${title}'/>`

    return container
  })

  clientName.prepend(imgWrap)
  actions.append(...tableIcons)
  htmlElement.append(clientName, ...appointmentContent, actions)

  return htmlElement
}
