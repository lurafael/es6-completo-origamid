//Console do browser
console.log('Hello, World!') // Hello, World!

//Variáveis
var nome = 'Lucas';
var idade = 27;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade); // Lucas, 27, false

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco); // 100

//Varias variáveis sem repetição da chave 'var'
var sobrenome = 'Ricci', 
  cidade = 'Santa Ernestina',
  estado = 'São Paulo';

console.log(sobrenome, cidade, estado) // Ricci, Santa Ernestina, São Paulo

//Hoisting 
//Move as declarações para cima do código, mas só atribui o valor na linha correspondente
console.log(comida);  // comida is not defined
var comida = 'Pizza'; // Agora o resultado é undefined, pois foi feito o hoisting 
console.log(comida);  // Pizza

//let e const

//let não deixa redeclarar uma variável com mesmo nome
// let time = 'São Paulo';   // São Paulo
// let time = 'Corinthians'; // Identifier 'time' has already been declared

//const além de não deixar redeclarar, não deixa modificar o valor por se tratar de uma constante
// const cidade = 'Santa Ernestina'; // Santa Ernestina
// cidade = 'Taquaritinga'; // Assignment to constant variable.