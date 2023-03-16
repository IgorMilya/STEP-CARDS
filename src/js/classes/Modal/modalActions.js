import { find } from '../../tools/index.js'
import { renderVisitModal } from '../../modules/index.js'
import { Visit } from '../Visit/Visit.js'

export const modalActions = () => {
  const openModalButton = find('.register')

  openModalButton.addEventListener('click', () => {
    const app = find('#app')
    const visit = new Visit({})
    renderVisitModal(app, visit)
  })
}
