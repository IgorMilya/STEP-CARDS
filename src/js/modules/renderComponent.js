import { find } from '../tools'

export const renderComponent = component => {
  const mainContent = find('.main-content')

  mainContent.append(component)
}
