import { getLocalData } from '../../modules/localData.js'
import { checkValue } from '../../components/Dropdown/checkValue.js'

export const editSelectedAppointment = id => {
  const localData = getLocalData()
  const selectedAppointment = localData.find(item => item.id === id)

  const { department } = selectedAppointment
  checkValue(department, selectedAppointment, true, id)
}
