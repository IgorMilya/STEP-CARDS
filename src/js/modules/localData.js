import { Appointment } from '../classes/index.js'
import { find } from '../tools/index.js'
import { renderNoDataImg } from '../tools/renderNoDataImg.js'
import { setLabelValue } from './setLabelValue.js'

let LOCAL_DATA = []

export const setLocalData = newData => {
  LOCAL_DATA.unshift(newData)
  fillTableList()
}

export const deleteLocalData = delItemId => {
  LOCAL_DATA = LOCAL_DATA.filter(item => item.id !== delItemId)
  fillTableList()
}

export const updateLocalDataStatus = updatedItemID => {
  LOCAL_DATA.find(localItem => localItem.id === updatedItemID).status = 'Closed'
  fillTableList()
}

export const updateLocalData = updateItem => {
  const updatedArray = LOCAL_DATA.filter(item => item.id !== updateItem.id)

  LOCAL_DATA = updatedArray.unshift(updateItem)

  fillTableList()
}

export const getLocalData = () => LOCAL_DATA

export const fillTableList = () => {
  setLabelValue()

  const tableList = find('.table-list')

  tableList.innerHTML = ''

  if (LOCAL_DATA.length) {
    LOCAL_DATA.forEach(item => {
      const appointment = new Appointment(item)

      appointment.addNewAppointment()
    })
  } else {
    renderNoDataImg('.table-list')
  }
}
