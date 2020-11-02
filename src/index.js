document.body.onload = addBaseElements;

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

  switchToHome();
}

function toggleLinkMenu() {
  navBarUl.classList.toggle('active')
}


function switchToHome() {
  console.log('switchToHome');
  removeContainerContent();
  containerDiv = document.getElementById('container');
  sectionHome = document.createElement('section');
  sectionHome.id = 'home';
  containerDiv.appendChild(sectionHome);

  h1Home = document.createElement('h1');
  h1Home.textContent = `Fallin' to Meal Presents`;
  sectionHome.appendChild(h1Home);

  pHome = document.createElement('p');
  pHome.textContent = 'Quisque at justo pretium, volutpat quam eget, auctor purus. In imperdiet nibh arcu, a suscipit lorem eleifend non. Cras sollicitudin pellentesque fermentum. Pellentesque vitae erat purus. Sed consequat velit mi, a sollicitudin nisi semper ac. Suspendisse potenti. Proin sagittis magna vel pulvinar sagittis.';
  sectionHome.appendChild(pHome);

  imgHome = document.createElement('img');
  imgHome.src = '/files/pumpkin2.png';
  sectionHome.appendChild(imgHome);


  // pHome = pHome + `img <src=""`
}///////////////////////////////////////////////////////////

function switchToMenu() {
  console.log('switchToMenu');
  removeContainerContent();
  containerDiv = document.getElementById('container');
  sectionMenu = document.createElement('section');
  sectionMenu.id = 'menu';
  containerDiv.appendChild(sectionMenu);

  menuName = document.createElement('div');
  menuName.textContent = 'Menu';
  menuName.id = 'menu-name-div';
  sectionMenu.appendChild(menuName);

  menuBackground = document.createElement('div');
  menuBackground.id = 'menu-bckgd';
  sectionMenu.appendChild(menuBackground);

  menuList = document.createElement('ul');
  menuList.id = 'menu-list';
  menuList.innerHTML =
`
<img id="img-one" src="/files/seed_green.png"></img>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 € </li>
  <li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span></li></ul>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 €</li>
  <li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span></li></ul>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 € <img class="spicy" src="/files/pepper.png"> </li><li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span></li></ul>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 € <img class="vegetarian" src="https://cdn1.iconfinder.com/data/icons/alternate-foods/512/alternate_foods-33-512.png"> </li>
  <li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span></li></ul>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 € <img class="vegetarian" src="https://cdn1.iconfinder.com/data/icons/alternate-foods/512/alternate_foods-33-512.png"> </li>
  <li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span><li></ul>
<ul class="menu-course">
  <li><span class="meal-name">Nullam odio lectus</span> <span class="price"></span>8,00 €  <img class="vegetarian" src="https://cdn1.iconfinder.com/data/icons/alternate-foods/512/alternate_foods-33-512.png"> <img class="spicy" src="/files/pepper.png"> </li>
  <li><span class="ingredients">Pellentesque vitae facilisis dui, eu lacinia libero. In dapibus suscipit turpis, tincidunt placerat eros eleifend at</span><li></ul>
  <img id="img-two" src="/files/vegetables.png"></img>`;
  menuBackground.appendChild(menuList);
}/////////////////////////////////////////////////////////////////////

function switchToGallery() {
  console.log('switchToGallery');
  removeContainerContent();
  containerDiv = document.getElementById('container');
  sectionGallery = document.createElement('section');
  sectionGallery.id = 'gallery';
  containerDiv.appendChild(sectionGallery);

  galleryBg = document.createElement('div');
  galleryBg.id = 'gallery-background';
  sectionGallery.appendChild(galleryBg);

  galleryName = document.createElement('div');
  galleryName.id = 'gallery-name-div';
  galleryBg.appendChild(galleryName);

  galleryContent = document.createElement('div');
  galleryContent.id = 'gallery-content-div';
  galleryContent.innerHTML =
  `<img src="https://assets.epicurious.com/photos/5c7d6ee0d6c37575ccdd79c3/16:9/w_1600%2Cc_limit/SMALL-PLATES-Chickpea-Flatbread-recipe-27022019.jpg">
  <img src="https://assets.epicurious.com/photos/5be1c1bf587ad42d4b37c134/16:9/w_1600%2Cc_limit/Vegetarian-Skillet-Stuffed-Shells-01112018.jpg">
  <img src="https://cdn.apartmenttherapy.info/image/upload/v1556137485/k/archive/5cd541275ee8954d2815fb4862417e66380c9f8b.jpg">
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-dinner-ideas-cassuoulet2-1576965198.jpg?crop=1xw:1xh;center,top&resize=480:*">
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-dinner-ideas-coq-au-vin-rose-ghk-1219-1576859402.jpg">
  <img src="https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80">`
  galleryBg.appendChild(galleryContent);
}////////////////////////////////////////////////////////////

function switchToContact() {
  console.log('switchToContact');
  removeContainerContent();
  containerDiv = document.getElementById('container');
  sectionContact = document.createElement('section');
  sectionContact.id = 'contact';
  containerDiv.appendChild(sectionContact);

  contactDiv = document.createElement('div');
  contactDiv.id = 'contact-div';
  contactDiv.innerHTML =
   `<div><h1> Visit us </h1>
   <p> Smiling Pumpkin Sq. 87, </p>
   <p>20-77, Novigrad </p></div>
   <div><h1> Call us to make an order ! </h1>
   <p><img src="/files/phone.png" class="icon"> +48 18 05 2015  </p></div>
   <div id="social-media-container">
   <h1> You can find us on </h1><section id="social-medias">
      <a href="#" tag="fb" ><p>Facebook</p> <img src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg"></a>
      <a href="#" tag="fb" ><p>Instagram</p> <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg"></a>
      <a href="#" tag="fb" ><p>TripAdvisor</p> <img src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504944.svg"></a></section></div>`
  sectionContact.appendChild(contactDiv);
}////////////////////////////////////////////////////////////





function removeContainerContent() {
  while (containerDiv.firstChild)  {
    containerDiv.removeChild(containerDiv.lastChild);
  }
}