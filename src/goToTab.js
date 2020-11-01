// export { ... } from 


function switchToHome() {
  debugger;
  removeContainerContent();
  console.log('switchToHome');
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
}

// function switchToMenu() {
//   removeContainerContent();
//   console.log('switchToMenu');
//   containerDiv = document.getElementById('container');
//   sectionMenu = document.createElement('section');
//   sectionMenu.id = 'menu';
//   containerDiv.appendChild(sectionMenu);
// }





function removeContainerContent() {
  while (containerDiv.firstChild)  {
    containerDiv.removeChild(containerDiv.lastChild);
  }
}

//export all switches