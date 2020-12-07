// Operadores de Atribuição
var x = 5;
var y = 10;

console.log(x += y); // x = x + y = 15
console.log(x *= y); // x = x * y = 150
console.log(x %= y); // x = x % y = 0
console.log(x **= y); // x = x ** y = 0 - Atribuição exponencial

//Operador Ternário
idade = 19;
var podeBeber = idade >= 18 ? 'Liberado!' : 'Não pode beber';

console.log(podeBeber); // Liberado

//Posso colocar uma condição em uma variável para retornar true ou false também,
//daí terei sempre a verificação pronta para usar em verificações maiores por exemplo
var possuiDiabete = false;
var podeBeber = idade >= 18 && !possuiDiabete;

console.log('Pode beber?', podeBeber);

//if abreviado 
var possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
// ou
if(possuiFaculdade)
 console.log('Possui faculdade');
else
 console.log('Não possui faculdade');