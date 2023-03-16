import { request } from '../tools'
import { setLocalData } from './localData'
import { Appointment } from '../classes'

import { renderNoDataImg } from '../tools'

export const getAllAppointments = async () => {
  const allAppointments = await request({ url: '', method: 'GET' })

  !allAppointments.length && renderNoDataImg('.table-list')

  allAppointments.forEach(obj => {
    const appointment = new Appointment(obj)

    appointment.addNewAppointment()
    setLocalData(obj)
  })
}
