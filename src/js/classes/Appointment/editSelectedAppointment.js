import { Modal } from '../Modal/Modal.js'
import { getLocalData } from '../../modules/localData.js'
import { checkValue } from '../../components/Dropdown/checkValue.js'

export const editSelectedAppointment = id => {
  // виклик Modal заповнення данних
  const modal = new Modal()
  const pattern = 'a-zA-Zа-яА-ЯіІїЇєЄЁё\\s'

  modal.openModal()
  const localData = getLocalData()
  const selectedAppointment = localData.find(item => item.id === id)
  const { department } = selectedAppointment
  console.log(selectedAppointment)
  checkValue(department, pattern, selectedAppointment, true)

  // RESPONSE
  // const response = await request({ url: `${this.id}`, method: 'PUT', token: token, body:editedBody })
  // response === '' && this.htmlElement.remove()

  // RESPONSE.ok
}
