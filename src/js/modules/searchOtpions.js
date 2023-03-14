export const searchOptions = () => {
  const search = document.querySelector('.search')

  search.oninput = () => {
    const appointCart = document.querySelectorAll('.appointment')
    const value = search.value.trim()

    if (value !== '') {
      appointCart.forEach(item => {
        const visitorName = item.querySelector('.name')
        const doctorName = item.querySelector('.doctor')

        if (visitorName.innerText.indexOf(value) === -1 && doctorName.innerText.indexOf(value) === -1) {
          item.style.display = 'none'
        } else {
          item.style.display = 'flex'
        }
      })
    } else {
      appointCart.forEach(item => {
        item.style.display = 'flex'
      })
    }
  }
}
