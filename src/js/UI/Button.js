export const Button = (selector, text) => {
  const Button = document.createElement('button')
  Button.className = 'button'
  Button.type = 'submit'
  Button.classList.add(selector)
  Button.textContent = text

  return Button.outerHTML
}

//TODO: переписати
export const logInButton = Button('log-in', 'Log In')

export const headerLogInButton = Button('header-login', 'Log In')

export const cancelButton = Button('modal-visit__button-cancel', 'Cancel')

export const saveButton = Button('modal-visit__button-save', 'Save')

export const covidButton = Button('covid-button-show', 'Show world')
