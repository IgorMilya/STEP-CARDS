import kit from '/src/assets/images/dashboard/kit.svg'
import patient from '/src/assets/images/dashboard/patient.svg'
import operation from '/src/assets/images/dashboard/operation.svg'
// import doctors from '/src/assets/images/dashboard/doctors2.svg'
import clinic from '/src/assets/images/dashboard/clinic.svg'
import { getLocalData } from '../../modules/localData'
import { valueDoctors } from '../../modules/setLabelValue'

const localData = getLocalData()

const localDataLength = localData.length
const valueDoctorsLength = valueDoctors.length

export const boardHeaderContent = [
  { text: 'All Appointments', className: 'appointments', path: kit, value: localDataLength },
  { text: 'Closed Appointments', className: 'close-appointments', path: clinic, value: localDataLength },
  { text: 'Patients', className: 'patients', path: patient, value: localDataLength },
  { text: 'Our Doctors', className: 'doctors', path: operation, value: valueDoctorsLength },
]

export const tableHeaders = ['Name', 'Department', 'Doctor', 'Tel', 'Priority', 'Status', 'Actions']
