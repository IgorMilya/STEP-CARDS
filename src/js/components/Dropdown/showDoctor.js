export const showDoctor = () => {
  const depList = document.querySelector('.department')
  depList.addEventListener('click', e => {
    const listItem = document.querySelectorAll('.doctor-item')
    const itemTabPost = e.target.getAttribute('data-post')
    listItem.forEach(value => {
      value.className.includes(itemTabPost) ? (value.style.display = 'block') : (value.style.display = 'none')
    })
  })
}
