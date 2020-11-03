import { switchToHome, switchToMenu, switchToGallery, switchToContact, removeContainerContent } from './switchTabbs'

function addBaseElements() {
  const mainDiv = document.getElementById('main');
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';
  mainDiv.appendChild(navbar);

  const navBarDiv = document.createElement('div');
  navBarDiv.id = 'nav-bar';
  navbar.appendChild(navBarDiv);

  const logoDiv = document.createElement('div');
  logoDiv.id = 'logo-div';
  navBarDiv.appendChild(logoDiv);

  const titleDiv = document.createElement('div');
  titleDiv.id = 'title-div';
  titleDiv.innerHTML = "Fallin' to Meal";
  logoDiv.appendChild(titleDiv);
  const subtitleDiv = document.createElement('div');
  subtitleDiv.id = 'subtitle-div';
  subtitleDiv.innerHTML = "Restaurant";
  logoDiv.appendChild(subtitleDiv);

  const navBarUl = document.createElement('ul');
  navBarUl.id = 'navbar-ul';
  navbar.appendChild(navBarUl);

  const nbHome = document.createElement('li');
  nbHome.innerHTML = '<a href="#" >Home</a>';
  nbHome.id = 'nb-home';
  navBarUl.appendChild(nbHome);

  const nbMenu = document.createElement('li');
  nbMenu.innerHTML = '<a href="#">Menu</a>';
  nbMenu.id = 'nb-menu';
  navBarUl.appendChild(nbMenu);

  const nbGallery = document.createElement('li');
  nbGallery.innerHTML = '<a href="#">Gallery</a>';
  nbGallery.id = 'nb-gallery';
  navBarUl.appendChild(nbGallery);

  const nbContact = document.createElement('li');
  nbContact.innerHTML = '<a href="#">Contact</a>';
  nbContact.id = 'nb-contact';
  navBarUl.appendChild(nbContact);

  const toggleMenu = document.createElement('a');
  toggleMenu.setAttribute("href", "#");
  toggleMenu.id = 'toggle-menu';
  toggleMenu.innerHTML = '<span class="bar"></span> <span class="bar"></span> <span class="bar"></span>';
  navbar.appendChild(toggleMenu);

  const containerDiv = document.createElement('div');
  containerDiv.id = 'container';
  mainDiv.appendChild(containerDiv);

  nbHome.addEventListener('click', switchToHome)
  nbMenu.addEventListener('click', switchToMenu)
  nbGallery.addEventListener('click', switchToGallery)
  nbContact.addEventListener('click', switchToContact)
  toggleMenu.addEventListener('click', toggleLinkMenu)

  function toggleLinkMenu() {
    navBarUl.classList.toggle('active')
  }

  switchToHome();
  function toggleLinkMenu() {
    navBarUl.classList.toggle('active')
  }
}

export default addBaseElements;