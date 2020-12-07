//Números
var idade = 28;
var gols = 1000;
var pi = 3.14;      // Usamos o . para decimal
var exp = 2e5;      //200000 

//Operadores Aritméticos
var soma = 100 + 50;          // 150
var subtracao = 100 - 50;     // 50
var multiplicacao = 100 * 2;  // 200
var divisao = 100 / 2;        // 50
var expoente = 2 ** 4;        // 16
var modulo = 14 % 5;          // 4

//Operadores Aritméticos (Strings)
var soma = '100' + 50;            // 10050 - Não consegue converter, só concatena e continua como string
var subtracao = '100' - 50;       // 50    - Consegue porque não existe concatenar negativamente
var multiplicacao = '100' * '2';  // 200
var divisao = 'Comprei 10' / 2;   // NaN (Not a Number)

//Consigo usar uma função para saber se um número é ou não NaN
var testeNaN = 'Isso é 100' / 2;
var testeNaN2 = '100' * '2';

console.log(isNaN(testeNaN));  //true 
console.log(isNaN(testeNaN2), testeNaN2); //false

//NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

//Nesse exemplo o resultado é um NaN porque o resultado de 80 + kg é uma string 80kg
//e por isso não é possível dividir por 2 uma string 

//A ordem importa
//Seguir a ordem de precedência sempre... () * / + - nesse exemplo
var total1 = 20 + 5 * 2;           // 30
var total2 = (20 + 5) * 2;         // 50
var total3 = 20 / 2 * 5;           // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++);    // 5
console.log(incremento);      // 6

var incremento2 = 5;
console.log(++incremento2);   // 6
console.log(incremento2);     // 6

//O + e - tentam transformar o valor seguinte em um número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)

console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
//true significa ligado ou 1, já o false, desligado ou 0