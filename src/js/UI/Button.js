export const Button = (selector, text) => {
  const Button = document.createElement('button')
  Button.className = 'button'
  Button.classList.add(selector)
  Button.textContent = text

  return Button
}
