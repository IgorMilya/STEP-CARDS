import { Modal } from '../Modal/Modal.js'
import { getLocalData } from '../../modules/localData.js'
// import { checkValue } from '../../components/Dropdown/checkValue.js'

export const editSelectedAppointment = id => {
  // виклик Modal заповнення данних
  console.log(id)
  const modal = new Modal()
  modal.openModal()
  const localData = getLocalData()
  const selectedAppointment = localData.find(item => item.id === id)

  const departmentInput = document.querySelector('[name="department"]')
  departmentInput.value = selectedAppointment.department

  // checkValue()

  // RESPONSE
  // const response = await request({ url: `${this.id}`, method: 'PUT', token: token, body:editedBody })
  // response === '' && this.htmlElement.remove()

  // RESPONSE.ok
}
