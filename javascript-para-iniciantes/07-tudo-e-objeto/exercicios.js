//Nomeie 3 propriedades ou métodos de strings
var nome = 'Lucas';

console.log(nome.toUpperCase());
console.log(nome.replace('cas', 'an'));
console.log(nome.concat(' Ricci'));

//Nomeie 5 propriedades ou métodos de elementos do DOM
var h1Element = document.querySelector('h1');

h1Element.style.background = '#f0f0f9';
h1Element.addEventListener('click', () => alert('Clicou no Hello, world!'));
h1Element.appendChild(document.createTextNode('Hello, world!'));
console.log(h1Element.parentNode);
console.log(h1Element.nodeType);

//Busque na web um objeto (método) capaz de interagir com o clipboard
//Clipboard é a parte do seu computador que lida com o CTRL + C

// Manual: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// Biblioteca: https://clipboardjs.com/