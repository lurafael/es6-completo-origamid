//Verificação com if else, por valor booleano
var possuiGraduacao = true;

if(possuiGraduacao) 
  console.log('É verdadeiro'); //É verdadeiro
else
  console.log('É falso');

// Condicionais avaliam valores como true ou false no parâmetro,
//se eu passar algum conteúdo DIFERENTE de falsy em uma var, vai ser true e entrará na condição
var possuiMestrado = NaN;

if(possuiMestrado)
  console.log('É verdadeiro');
else {
  console.log('possuiMestrado foi:'); 
  console.log('false, 0, "" (porque com espaço " " é true), null, undefined, ou NaN');
}

//Operador lógico
//Operador ! nega qualquer ação, inclusive converte para booleano os valores contidos nas variáveis
console.log(!possuiMestrado);  //true - Converteu o NaN que é um valor false, ficando true
console.log(!!possuiMestrado);  //false - Converteu pra true e depois pra false

//Operador de comparação - Retorna valores booleanos
console.log('10 > 5', 10 > 5);    //true
console.log('10 < 5', 10 < 5);    //false
console.log('10 >= 5', 10 >= 5);  //true
console.log('10 <= 5', 10 <= 5);  //false

//Operadores de comparação
// O == faz uma comparação se é igual ao outro, exemplo: 10 == '10' vai ser true pois são iguais,
//para ver se são iguais e de MESMO TIPO, usa-se 10 === '10' que vai ser false
console.log(10 == '10');  //true
console.log(10 === '10'); //false
console.log(10 != '10');  //false
console.log(10 !== '10'); //true

//Operadores Lógicos 
//Operador &&
//Se ambos os valores forem true irá retornar o último, senão, retorna o item false e não continua a verificação
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log('Gato' && 'Cão'); //'Cão'
console.log((5 - 5) && (5 + 5)); //0
console.log((5 >= 5) && (3 < 6)); //true

//Operador ||
//Compara se uma ou outra expressão é verdadeira
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log('Gato' || 'Cão'); //'Gato'
console.log((5 - 5) || (5 + 5)); //10
console.log((5 >= 5) || (3 < 6)); //true

//Switch - Modo 1
var corFavorita = '';

switch (corFavorita) {
  case 'Azul': 
    console.log('Olhe para o céu!');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol!');
    break;
  default:
    console.log('Feche os olhos!');
}

//Switch - Modo 2
var corFavorita = 'Azul';

switch (true) {
  case corFavorita === 'Azul': 
    console.log('Olhe para o céu!');
    break;
  case corFavorita === 'Amarelo':
    console.log('Olhe para o sol!');
    break;
  default:
    console.log('Feche os olhos!');
}