import { createEl } from './src/js/tools/index.js'
import assistant from './src/assets/images/assistant.svg'

export const renderSupportMessage = text => {
  const chatBox = createEl({ css: 'chat-box' })
  chatBox.classList.add('support')
  chatBox.innerHTML = `
  <img class='chat-logo' src='${assistant}' alt='assistant'>
  <p class='chat-text'>${text}</p>
  `
  return chatBox
}
