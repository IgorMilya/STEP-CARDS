import { Appointment } from '../classes/index.js'
import { find } from '../tools/index.js'

let LOCAL_DATA = []
const tableList = find('.table-list')
export const setLocalData = newData => {
  LOCAL_DATA.unshift(newData)
  fillTableList()
}
export const deleteLocalData = delItemId => {
  LOCAL_DATA = LOCAL_DATA.filter(item => item.id !== delItemId)
  fillTableList()
}
export const getLocalData = () => LOCAL_DATA

const fillTableList = () => {
  tableList.innerHTML = ''

  if (LOCAL_DATA.length) {
    LOCAL_DATA.forEach(item => {
      const appointment = new Appointment(item)
      appointment.addNewAppointment()
    })
  } else {
    console.log(tableList)
  }
}
