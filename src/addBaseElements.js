function addBaseElements() {
  console.log("addBaseElements");
  mainDiv = document.getElementById('main');
  navbar = document.createElement('nav');
  navbar.id = 'navbar';
  mainDiv.appendChild(navbar);

  navBarDiv = document.createElement('div');
  navBarDiv.id = 'nav-bar';
  navbar.appendChild(navBarDiv);

  logoDiv = document.createElement('div');
  logoDiv.id = 'logo-div';
  navBarDiv.appendChild(logoDiv);

  titleDiv = document.createElement('div');
  titleDiv.id = 'title-div';
  titleDiv.innerHTML = "Fallin' to Meal";
  logoDiv.appendChild(titleDiv);
  subtitleDiv = document.createElement('div');
  subtitleDiv.id = 'subtitle-div';
  subtitleDiv.innerHTML = "Restaurant";
  logoDiv.appendChild(subtitleDiv);

  navBarUl = document.createElement('ul');
  navBarUl.id = 'navbar-ul';
  navbar.appendChild(navBarUl);

  nbHome = document.createElement('li');
  nbHome.innerHTML = '<a href="#" >Home</a>';
  nbHome.id = 'nb-home';
  navBarUl.appendChild(nbHome);

  nbMenu = document.createElement('li');
  nbMenu.innerHTML = '<a href="#">Menu</a>';
  nbMenu.id = 'nb-menu';
  navBarUl.appendChild(nbMenu);

  nbGallery = document.createElement('li');
  nbGallery.innerHTML = '<a href="#">Gallery</a>';
  nbGallery.id = 'nb-gallery';
  navBarUl.appendChild(nbGallery);

  nbContact = document.createElement('li');
  nbContact.innerHTML = '<a href="#">Contact</a>';
  nbContact.id = 'nb-contact';
  navBarUl.appendChild(nbContact);

  toggleMenu = document.createElement('a');
  toggleMenu.setAttribute("href", "#");
  toggleMenu.id = 'toggle-menu';
  toggleMenu.innerHTML = '<span class="bar"></span> <span class="bar"></span> <span class="bar"></span>';
  navbar.appendChild(toggleMenu);

  containerDiv = document.createElement('div');
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

  // return {nbHome, nbMenu, nbGallery, nbContact, toggleMenu}

}

export default addBaseElements;