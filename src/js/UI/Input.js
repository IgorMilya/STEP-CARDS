const Input = (type, placeholder) =>
  !!type && !!placeholder
    ? `<input type='${type}' placeholder='${placeholder}' name='${type}'>`
    : !!type
    ? `<input type='${type}' name='${type}'></i>`
    : null

export const textInput = Input('text', 'Email')
export const passwordInput = Input('password', 'Password')
export const checkboxInput = Input('checkbox')
