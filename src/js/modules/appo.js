import { getLocalData } from './localData'

export const setLabelValue = () => {
  const localData = getLocalData()
  const appointments = document.querySelector('.appointments')
  // const patients = document.querySelector('.patients')
  // const doctors = document.querySelector('.doctors')
  // const closeAppointments = document.querySelector('.close-appointments')

  appointments.innerHTML = localData.length
}