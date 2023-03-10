export const showElements = (list, itemTabs, itemTabPost) => {
  list.forEach(value => {
    value.className.includes(itemTabs) || value.className.includes(itemTabPost)
      ? (value.style.display = 'block')
      : (value.style.display = 'none')
  })
}
