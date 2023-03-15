import { create, find } from '../tools/index.js'
import arrowIcon from '../../assets/images/dashboard/paginationArrow.svg'
import { dashboardPagination } from '../components/Dashboard/dashboardPagination.js'
import { initCharts } from '../components/Dashboard/index.js'
export let LOCAL_DATA = []

export const setLocalData = newData => {
  LOCAL_DATA.push(newData)
}

export const getLocalData = () => LOCAL_DATA
