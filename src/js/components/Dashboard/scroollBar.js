import { find } from '../../tools/index.js'
import Scrollbar from 'smooth-scrollbar'

export const initScrollbar = () => {
  const dashboardList = find('.table-list')
  const scrollbarOptions = { damping: 0.04 }
  Scrollbar.init(dashboardList, scrollbarOptions)
}
