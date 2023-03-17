import { create } from '../../tools'

export const createError = (dropdown, valid) => {
  dropdown.forEach(item => {
    if (!item.value) {
      const dropdownError = create('p', 'dropdown-error', 'Enter the apt value')
      valid = false
      item.after(dropdownError)
    }
  })
}
