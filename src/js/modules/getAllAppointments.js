import { request } from '../tools'

export const getAllAppointments = async () => {
  const token = localStorage.getItem('token')
  const allAppointments = await request({ url: '', method: 'GET', token })

  return allAppointments
}
