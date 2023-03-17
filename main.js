import './src/scss/style.scss'
import { renderBasicLayout } from './src/js/modules'
import { createEl, find } from './src/js/tools'
import ears from './src/assets/images/headset-solid.svg'
import sending from './src/assets/images/paper-plane-solid.svg'
import { run } from './openAI.js'
import { renderUserMessage } from './renderUserMessage.js'

renderBasicLayout()

/////////////////////////////////////////////////////////////////

const supportWrapper = createEl({ el: 'div', css: 'support-wrapper' })
supportWrapper.innerHTML = `
    <img class='support-logo' src='${ears}' alt='support logo'>
`
document.body.append(supportWrapper)
////

/////////////////////////////////////////////////
const chatWrapper = createEl({ css: 'chat-wrapper' })
chatWrapper.innerHTML = `
    <div class='chat-context'> </div>
    
    <div class='chat-form'>
          <textarea class='support-textarea' rows='1' placeholder='Enter some questions'></textarea>
          <img class='sending' src='${sending}' alt='paper-line'>
    </div>
    `
document.body.append(chatWrapper)
////

const supportLogo = find('.support-logo')

supportLogo.addEventListener('click', () => {
  supportWrapper.style.display = 'none'
  chatWrapper.style.display = 'flex'
})
////

const sendingButton = find('.sending')

sendingButton.addEventListener('click', () => {
  const userText = find('.support-textarea')
  const chatContext = find('.chat-context')
  chatContext.prepend(renderUserMessage(userText.value))
  run(userText.value, chatContext)
  userText.value = ''
})
//////////////////////////////////////////////////////////

document.addEventListener('click', e => {
  if (!e.composedPath().includes(chatWrapper) && !e.composedPath().includes(supportLogo)) {
    chatWrapper.style.display = 'none'
    supportWrapper.style.display = 'block'
  }
})
