export const drawDepartment = (department, tab, list) => {
  if (tab === 'Department') {
    department.forEach(({ department }) => {
      const li = document.createElement('li')
      li.classList.add('modal-visit__dropdown-item')
      li.setAttribute('data-post', `${department}`)
      li.setAttribute('data-all', `All`)
      li.textContent = `${department}`
      list.append(li)
    })
  }
}
