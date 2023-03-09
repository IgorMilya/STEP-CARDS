export const renderComponent = component => {
  const pageBody = document.querySelector('.main-content')
  pageBody.append(component)
}
