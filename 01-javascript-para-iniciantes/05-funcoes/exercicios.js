// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  return !!value === true;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squarePerimeter(side) {
  return side * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Crie uma função que verifica se um número é par
function isPair(number) {
  return number % 2 == 0;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function dataType(data) {
  return typeof data;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
document.addEventListener('scroll', () => console.log('Lucas Rafael Ricci'));

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
}

precisoVisitar(20);
jaVisitei(20);