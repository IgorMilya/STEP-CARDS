export const createTemplate = () => {
  const modalVisit = document.createElement('div')
  modalVisit.className = 'modal-visit'
  modalVisit.innerHTML = `
  <div class='visit-container'>
  <h1 class='modal-visit__title'>Add card</h1>
  
</div>
  `
  return modalVisit
}
