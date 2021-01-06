// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(menuItem => menuItem.classList.add('ativo'));

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((menuItem, index) => {
  if (index > 0)
    menuItem.classList.remove('ativo');
});

//ou...

// menuItems.forEach((menuItem) => {
//   menuItem.classList.remove('ativo');
// });
// menuItems[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll('img');
images.forEach(image => console.log(image, image.hasAttribute('alt')));

// Modifique o href do link externo no menu
const externalLink = document.querySelector('[href^=https]');
console.log(externalLink.setAttribute('href', 'https://www.youtube.com'));

