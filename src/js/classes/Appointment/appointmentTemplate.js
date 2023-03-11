import { createElement } from '../../tools'

export const appointmentTemplate = props => {
  const { element, avatar, name, surname, department, doctor, tel, priority, status } = props

  const appointment = element
  element.classList.add('appointment')

  const imgWrap = createElement('div', 'avatar')
  const clientName = createElement('div', 'name', `${name} ${surname}`)
  imgWrap.innerHTML = `<img src = '${avatar}' alt = 'Client avatar' />`

  clientName.prepend(imgWrap)

  const appointmentContent = [
    createElement('div', 'name', `${name} ${surname}`),
    createElement('div', 'department', `${department}`),
    createElement('div', 'doctor', `${doctor}`),
    createElement('div', 'tel', `${tel}`),
    createElement('div', 'priority', `${priority}`),
    createElement('div', 'status', `${status}`),
  ]

  const actions = createElement('div', 'actions')

  appointment.append(clientName, ...appointmentContent, actions)

  return appointment
}
