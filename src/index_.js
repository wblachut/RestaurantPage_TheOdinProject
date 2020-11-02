import { addBaseElements } from './addBaseElements'
import { switchToHome, switchToMenu, switchToGallery, switchToContact, removeContainerContent } from './switchTabbs'
// import * as ...(?) from './switchTabbs'

document.body.onload = addBaseElements;

nbHome.addEventListener('click', switchToHome)
nbMenu.addEventListener('click', switchToMenu)
nbGallery.addEventListener('click', switchToGallery)
nbContact.addEventListener('click', switchToContact)
toggleMenu.addEventListener('click', toggleLinkMenu)
switchToHome();
function toggleLinkMenu() {
  navBarUl.classList.toggle('active')
}