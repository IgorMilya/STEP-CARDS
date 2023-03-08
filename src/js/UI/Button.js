const Button = (selector, text) => {
  const Button = document.createElement('button')
  Button.className = 'button'
  Button.type = 'submit'
  Button.classList.add(selector)
  Button.textContent = text

  return Button.outerHTML
}

export const logInButton = Button('log-in', 'Log In')
