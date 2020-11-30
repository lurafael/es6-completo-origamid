// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 27;
var parente = 28;

if (minhaIdade > parente)
  console.log('É maior');
else if (minhaIdade === parente)
  console.log('É igual');
else 
  console.log('É menor');

// forma 2
switch (true) {
  case minhaIdade > parente:
    console.log('É maior');
    break;
  case minhaIdade === parente:
    console.log('É igual');
    break;
  default:
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3 - Porque retorna o último, 3 && 5 && 3 

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';           // truthy
var idade = 28;               // truthy
var possuiDoutorado = false;  // falsy
var empregoFuturo;            // falsy
var dinheiroNaConta = 0;      // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china)
  console.log(`Brasil tem MAIS habitantes, com um total de ${brasil} milhões`);
else
  console.log(`Brasil tem MENOS habitantes, com um total de ${brasil} milhões`);

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');                 //Falso
}
// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');         //Cão
} else {
  console.log('Falso');
}