import './src/scss/style.scss'
import { renderBasicLayout } from './src/js/modules'
import { createEl, find } from './src/js/tools'
import ears from './src/assets/images/headset-solid.svg'
import client from './src/assets/images/client.svg'
import assistant from './src/assets/images/assistant.svg'

renderBasicLayout()

const supportWrapper = createEl({ el: 'div', css: 'support-wrapper' })
supportWrapper.innerHTML = `
    <img class='support-logo' src='${ears}' alt='support logo'>
`

document.body.append(supportWrapper)

const supportLogo = find('.support-logo')
supportLogo.addEventListener('click', () => {
  supportWrapper.classList.replace('support-wrapper', 'support-wrapper-opened')

  supportWrapper.innerHTML = `
    <div class='chat-context'>
    
              <div class='support-response'>Hello, How can I help you?</div>

       
       <div class='chat-box'>
              <p class='chat-text'>hi</p>
              <img class='chat-logo' src='${client}' alt='client'>
       </div>
       
       <div class='chat-box support'>
             <img class='chat-logo' src='${assistant}' alt='assistant'>
             <p class='chat-text'>Hello</p>
       </div>    
        
    </div>
    
    <div class='chat-form'>
          <textarea class='support-textarea' rows='1' placeholder='Enter some questions'></textarea>
    </div>
    
    `
})
