import { createEl, find } from '../../tools'
import ears from '../../../assets/images/headset-solid.svg'
import sending from '../../../assets/images/paper-plane-solid.svg'
import { renderUserMessage } from './renderUserMessage'
import { run } from './openAI'
import { closeSupport } from './closeSupport'

export const initBot = () => {
  const supportWrapper = createEl({ el: 'div', css: 'support-wrapper' })
  const supportLogo = createEl({ el: 'img', css: 'support-logo', src: ears, alt: 'support logo' })
  const chatWrapper = createEl({ css: 'chat-wrapper' })
  supportWrapper.append(supportLogo)

  chatWrapper.innerHTML = `
    <div class='chat-context'> </div>
    <div class='chat-form'>
          <textarea class='support-textarea' rows='1' placeholder='Enter some questions'></textarea>
          <img class='sending' src='${sending}' alt='paper-line'>
    </div>
    `

  document.body.append(supportWrapper, chatWrapper)

  const sendingButton = find('.sending')
  const userText = find('.support-textarea')
  const chatContext = find('.chat-context')

  supportLogo.addEventListener('click', () => {
    supportWrapper.style.display = 'none'
    chatWrapper.style.display = 'flex'
  })

  sendingButton.addEventListener('click', async () => {
    chatContext.prepend(renderUserMessage(userText.value))
    await run(userText.value, chatContext)
    userText.value = ''
  })

  closeSupport(chatWrapper, supportLogo, supportWrapper)
}
