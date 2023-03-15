import { find, request, create } from '../tools'
import { setLocalData } from './localData.js'
import noDataImage from '../../assets/images/dashboard/noData.svg'

export const getAllAppointments = async () => {
  const token = localStorage.getItem('token')
  const allAppointments = await request({ url: '', method: 'GET', token })
  const noDataImg = create('img', 'nodata-image')
  const tableList = find('.table-list')
  noDataImg.src = noDataImage

  !allAppointments.length ? tableList.append(noDataImg) : ''

  allAppointments.forEach(obj => {
    setLocalData(obj)
  })
}
