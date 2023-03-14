import { request } from '../tools'
import { Appointment } from '../classes/index.js'
import { setLocalData } from './localData.js'

export const getAllAppointments = async () => {
  const token = localStorage.getItem('token')
  const allAppointments = await request({ url: '', method: 'GET', token })

  allAppointments.forEach(obj => {
    const appointment = new Appointment(obj)
    appointment.addNewAppointment()
    console.log(obj)
    setLocalData(obj)
    // console.log(LOCAL_DATA)
  })
}
