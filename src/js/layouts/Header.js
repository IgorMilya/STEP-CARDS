import logoImg from '../../assets/images/logo/logo-img.svg'
import logoText from '../../assets/images/logo/logo-text.svg'
import imgAvatar from '../../assets/images/avatar/avatar.svg'
import iconInput from '../../assets/images/sidebarIcons/search-input.svg'
import { headerLogInButton } from '../UI'
import { create } from '../tools'

export const Header = () => {
  const Header = create('header', 'header')

  Header.innerHTML = `
  <div class="header-logo-wrapp">
     <div class="header-logo">
       <a class="header-logo-link" href="#">
       <img src="${logoImg}"/>
       <img src="${logoText}"/>
       </a>
       </div>
        </div>
   </div>

<div class="header-content">
<div class="header-search">

<div class="header-search-wrap">
<img class="icon-input" src="${iconInput}"/>
<input class="search" type="text" placeholder="Search"
</div>
   
    </div>
    </div>

    <div class="header-actions">
    <div class="header-button">${headerLogInButton}</div>
    <div class="header-avatar">
    <img src="${imgAvatar}"/>
    </div>
    </div>
  `

  return Header
}
