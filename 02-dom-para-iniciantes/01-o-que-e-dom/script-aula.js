//O DOM representa os documentos HTML em formato de objeto, então basicamente o navegador 
//interpreta isso, e podemos manipular a estrutura, estilo e conteúdo desses documentos.
//Toda tag é convertida em objeto pelo DOM, que herda os métodos e propriedades do objeto 
//Element, e com isso, podemos acessar esses métodos e propriedades através do "."

//Enquanto for me retornando um objeto posso ir acessando as props e métodos
console.log(window.location.href); //Retorna a pág que estou acessando no momento

//Quando uso um querySelector para pegar algum elemento HTML, ele traz o elemento, mas também
//traz todos os métodos e propriedades que herdam do objeto Element, facilitando muito a manipulação.
//Posso acessar através do "." para alterar ou ter acesso a informações do elemento que foi pego. 

const el = document.querySelector('title');

console.log(el); //uso o console.dir para ver os métodos e propriedades contidos no el

//Quando vier um elemento, vai herdar props e métodos do Element, quando vier um array, herda do Array, quando for nodelist herda do nodelis e assim por diante, então dependendo do resultado obtido, muda-se a quantidade e tipos de props e métodos.