import { createEl } from './create'
import noDataImage from '../../assets/images/dashboard/noData.svg'
import { renderVisitModal } from '../modules'
import { find } from './find'
import { Visit } from '../classes'

export const renderNoDataImg = parentNodeSelector => {
  const parentNode = document.querySelector(parentNodeSelector)
  const noDataImg = createEl({ el: 'img', css: 'nodata-image', src: noDataImage })

  parentNode.append(noDataImg)

  noDataImg.addEventListener('click', e => {
    const x = e.offsetX
    const y = e.offsetY
    const app = find('#app')
    const visit = new Visit({})
    console.log(x, y)
    if (126 <= x && x <= 186 && 18 <= y && y <= 73) {
      renderVisitModal(app, visit)
    }
  })
}
