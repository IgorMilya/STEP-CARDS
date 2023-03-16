import { getLocalData } from './localData'
import { department } from '../utils/constants'

export const valueDoctors = department.reduce((acc, curr) => {
  return acc.concat(curr.doctor)
}, [])

export const setLabelValue = () => {
  const localData = getLocalData()

  const appointments = document.querySelector('.appointments')

  const patients = document.querySelector('.patients')
  const closeAppointments = document.querySelector('.close-appointments')

  const patpatientsData = localData.map(elem => elem.status)
  const closeAppointmentssData = localData.map(elem => elem.status)

  const [openPatients] = [patpatientsData.filter(item => item === 'Opened')]
  const [closePatients] = [closeAppointmentssData.filter(item => item === 'Closed')]

  const openLength = [openPatients.length]
  const closedLength = [closePatients.length]

  appointments.innerHTML = localData.length
  patients.innerHTML = openLength
  closeAppointments.innerHTML = closedLength
}
