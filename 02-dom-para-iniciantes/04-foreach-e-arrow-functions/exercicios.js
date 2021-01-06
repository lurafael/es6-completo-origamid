// Mostre no console cada parágrado do site

const tagsP = document.querySelectorAll('p');
tagsP.forEach(tagP => console.log(tagP.outerHTML));

// Mostre o texto dos parágrafos no console

const textosP = document.querySelectorAll('p');
textosP.forEach(textoP => console.log(textoP.innerText));

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) => {
 console.log(item, index)
});

i = 0;
imgs.forEach(() => {
 console.log(i++);
});

imgs.forEach(() => i++);