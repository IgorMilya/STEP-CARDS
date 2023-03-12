export const loginFormHandler = () => {
  const button = document.querySelector('.header-login')
  button.addEventListener('click', () => {
    const loginForm = document.querySelector('.login-form')

    loginForm.classList.add('fade-in')
  })
}
