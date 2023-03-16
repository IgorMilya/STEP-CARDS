import kit from '/src/assets/images/dashboard/kit.svg'
import patient from '/src/assets/images/dashboard/patient.svg'
import operation from '/src/assets/images/dashboard/operation.svg'
import clinic from '/src/assets/images/dashboard/clinic.svg'

export const boardHeaderContent = [
  { text: 'Appointments', className: 'appointments', path: kit, value: 213 },
  { text: 'Patients', className: 'patients', path: patient, value: 104 },
  { text: 'Doctors', className: 'doctors', path: operation, value: 24 },
  { text: 'Close Appointments', className: 'close-appointments', path: clinic, value: '$ 12,174' },
]

export const tableHeaders = ['Name', 'Department', 'Doctor', 'Tel', 'Priority', 'Status', 'Actions']

export const priorityFilterLabels = ['High', 'Normal', 'Low']

export const departmentFilterLabels = ['Cardiology', 'Dentist', 'Therapist']
// export const departmentFilterLabels = ['Cardiology', 'Dentistry', 'Therapy']
