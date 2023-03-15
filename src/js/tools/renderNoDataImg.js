import { create } from './create.js'
import noDataImage from '../../assets/images/dashboard/noData.svg'

export const renderNoDataImg = parentNodeSelector => {
  const parentNode = document.querySelector(parentNodeSelector)
  const noDataImg = create('img', 'nodata-image')

  noDataImg.src = noDataImage

  parentNode.append(noDataImg)
}
