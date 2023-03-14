import { find } from './index.js'

export const renderComponent = component => {
  const mainContent = find('.main-content')

  mainContent.append(component)
}
