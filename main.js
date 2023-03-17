import './src/scss/style.scss'
import { renderBasicLayout } from './src/js/modules'
import { createEl, find } from './src/js/tools'
import ears from './src/assets/images/headset-solid.svg'
import client from './src/assets/images/client.svg'
import sending from './src/assets/images/paper-plane-solid.svg'
import { run } from './openAI.js'

renderBasicLayout()

const supportWrapper = createEl({ el: 'div', css: 'support-wrapper' })
supportWrapper.innerHTML = `
    <img class='support-logo' src='${ears}' alt='support logo'>
`

document.body.append(supportWrapper)

const supportLogo = find('.support-logo')

const renderUserMessage = text => {
  const chatBox = createEl({ css: 'chat-box' })

  chatBox.innerHTML = `
  <p class='chat-text'>${text}</p>
    <img class='chat-logo' src='${client}' alt='client'>
  `
  return chatBox
}

supportLogo.addEventListener('click', () => {
  console.log(1)
  supportWrapper.classList.replace('support-wrapper', 'support-wrapper-opened')

  supportWrapper.innerHTML = `
    <div class='chat-context'> </div>
    
    <div class='chat-form'>
          <textarea class='support-textarea' rows='1' placeholder='Enter some questions'></textarea>
          <img class='sending' src='${sending}' alt='paper-line'>
    </div>
    `

  const sendingButton = find('.sending')

  sendingButton.addEventListener('click', () => {
    const userText = find('.support-textarea')
    const chatContext = find('.chat-context')
    chatContext.prepend(renderUserMessage(userText.value))
    run(userText.value, chatContext)
    userText.value = ''
  })
})
