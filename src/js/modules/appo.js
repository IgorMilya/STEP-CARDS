export const testAppo = () => {
  const cardValue = document.querySelector('.card-value')

  const appo = document.getElementsByClassName('appointment')
  // console.log('appo:', appo)

  //   cardValue.innerHTML = appo.length

  const iconDelete = document.querySelectorAll('.icon-delete')

  iconDelete.forEach(elem => {
    elem.addEventListener('click', e => {
      for (const app of appo) {
        cardValue.innerHTML = appo.length
      }
    })
  })
}
