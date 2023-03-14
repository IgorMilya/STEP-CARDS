import { create, find } from '../tools/index.js'
import arrowIcon from '../../assets/images/dashboard/paginationArrow.svg'
import { dashboardPagination } from '../components/Dashboard/dashboardPagination.js'
let LOCAL_DATA = []

export const setLocalData = newData => LOCAL_DATA.push(newData)
export const deleteLocalData = data => {}
export const getLocalData = () => LOCAL_DATA
