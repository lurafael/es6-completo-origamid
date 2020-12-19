//Pegar elementos do HTML com getElementById que pega 1 elemento só
const animais = document.getElementById('animais');

console.log(animais) //Pega a section animais, afinal tem o id animais lá

//Posso pegar elementos com getElementsByClassName e getElementsByTagName
const gridSection = document.getElementsByClassName('grid-section');
const ul = document.getElementsByTagName('ul');

console.log(gridSection); //Tras os grid-sections: animais, faq e contato
console.log(ul); //Traz todos os ul do site

//Também tem o jeito mais comum que é o querySelector e querySelectorAll em que a seleção é feita
//como no css.
const linkCSS = document.querySelector('[href^="https"]'); //Procura um atributo href que comece com https
const ultimoItem = document.querySelector('.animais-lista li:last-child'); //Pega o último item da lista li

console.log(linkCSS);
console.log(ultimoItem);
//Para pegar classes usa-se o "." e id o #, ou seja, igual o css.

//O querySelectorAll pega todos os resultados correspondentes e retorna um array-like, 
//diferente do querySelector que retorna um só resultado
const comecaComHash = document.querySelectorAll('[href^="#"]'); //Procura em toda a página, os atributos href que comecem com #

console.log(comecaComHash);

//Lembrando que a atualização do getElement é ao vivo, então sempre que for adicionado algo ao HTMl, será
//atualizado também no array-like de itens caso haja um, já o querySelector e querySelectorAll não, é estático.
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

ultimoItem.classList.add('grid-section');

console.log(gridSectionHTML.length) // 4
console.log(gridSectionNode.length) // 3

//O querySelector/querySelectorAll retorna uma Nodelist que tem mais funcionalidades que o HTMLCollection que é o retorno
//do getElement, uma delas é o forEach
gridSectionNode.forEach(() => console.log('NodeList')); //3x NodeList - Tem 3 itens no array-like do gridSectionNode
// console.log(gridSectionHTML.forEach(() => console.log('HTMLCollection'))); //gridSectionHTML.forEach is not a function

//Existe uma solução para transformar um array-like em array com acesso a todos os métodos
//e propriedades que herdam do construtor Array, com o from o resultado passa a ser estático 
//igual ao querySelector/querySelectorAll.
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(() => console.log('HTMLCollection')); //4x HTMLCollection



