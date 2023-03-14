import { create, find, findAll } from '../../tools/index.js'
import arrowIcon from '../../../assets/images/dashboard/paginationArrow.svg'

export const dashboardPagination = arg => {
  // const paginationContainer = find('.table-pagination')
  // const listItems = findAll('.appointment')
  // const prevButton = create('div', 'prevButton')
  // const nextButton = create('div', 'nextButton')
  // prevButton.innerHTML = `<img src=${arrowIcon} alt='arrow' class='arrow'>`
  // nextButton.innerHTML = `<img src=${arrowIcon} alt='arrow' class='arrow'>`
  //
  // let listItemsQuantity = listItems.length
  // const paginationLimit = window.innerHeight > 820 ? 10 : 7 //TODO:занести в змінні
  // const pageCount = Math.ceil(listItemsQuantity / paginationLimit)
  //
  // const setCurrentPage = pageNum => {
  //   const prevRange = (pageNum - 1) * paginationLimit
  //   const currRange = pageNum * paginationLimit
  //
  //   listItems.forEach((item, index) => {
  //     item.classList.add('hidden-item')
  //     if (index >= prevRange && index < currRange) {
  //       item.classList.remove('hidden-item')
  //     }
  //   })
  // }
  // const calcTabs = tabsQuantity => {
  //   let tabs = []
  //   for (let i = 1; i <= tabsQuantity; i++) {
  //     const paginationItem = create('div', 'pagination-item', `${i}`)
  //     paginationItem.addEventListener('click', e => setCurrentPage(paginationItem.textContent))
  //     tabs.push(paginationItem)
  //   }
  //   return tabs
  // }
  //
  // const tabs = calcTabs(pageCount)
  //
  // paginationContainer.innerHTML = ''
  // paginationContainer.append(prevButton, ...tabs, nextButton)
  //
  // !!arg ? setCurrentPage(1) : ''
}
