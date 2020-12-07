//Escopo de uma função só existe dentro dela
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

//Se eu criar uma variável sem var, const ou let, ela vira uma variável global... 
//usando o 'use strict'; o js entra no modo estrito e não deixa criar variáveis sem declarar 
// o var, const ou let.

//Funções conseguem pegar dados de fora delas, desde q sejam informações "Pai"
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

//var vaza o bloco do if e funciona mesmo após o if ser encerrado
if (true) {
  var carrao = 'Cobalt';
  console.log(carrao); // Cobalt
}

console.log(carrao); // Cobalt

//Por isso usamos o let e const que vai dar erro, mantendo o escopo da variável
if (true) {
  let videoGame = 'PS4';
  console.log(videoGame); // PS4
}

// console.log(videoGame); // videoGame is not defined

//Podemos criar blocos sem precisar de if ou função
{
  var cachorro = 'Rex';
  let jogo = 'League of Legends';
  const ano = 2018;
}

console.log(cachorro); // Rex
// console.log(jogo); // jogo is not defined
// console.log(ano); // ano is not defined

//Var vaza tudo, inclusive for, vaza o loop e vem com o valor atualizado
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10
//Se fosse com let não vazaria o escopo do for, deixaria de existir ao final do loop

//const
const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor

// const semana; // erro, declarou sem valor e já que o valor em const não muda, pelo menos algo a ser usado precisa ter.

//posso mudar as informações do objeto, inclusive adicionar novas props e metodos, só não posso
//modificar a estrutura dele (para uma string por exemplo).
const data = {
 dia: 28,
 mes: 'Dezembro',
 ano: 2018,
}

data.dia = 29; // Funciona
data.bissexto = false; // Funciona
// data = 'Janeiro'; // erro

console.log(data);

//let
//Não permite a redeclaração de mesmo nome e não vaza o escopo que está. 
let ano;

ano = 2018;
ano++;
console.log(ano); // 2019
// let ano = 2020; // erro, redeclarou a variável

//Usaremos const sempre que der, já que geralmente atribuímos algum valor e raramente modificamos,
//e também, como trabalhamos muito com arrays e objetos e o const permite alterar os conteúdos, dá pra usar bastante o const.
//Usaremos let quando precisarmos ficar trocando os valores de variáveis primitivas.