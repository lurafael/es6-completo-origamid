//Tipos de dados
var nome = 'Lucas';          // String
var idade = 27;              // Number
var possuiFaculdade = false; // Boolean
var time;                    // Undefined
var comida = null;           // Null
var simbolo = Symbol()       // Symbol
var novoObjeto = {}          // Object

//Verificar tipos com o typeof
//Posso usar a chave typeof para saber o tipo de dados primitivos, exemplo:

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof possuiFaculdade); // boolean
console.log(typeof time); // boolean
console.log(typeof simbolo); // symbol

//Somar strings para concatenar palavras 
var nome = 'Lucas';
var sobrenome = 'Ricci';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto); // Lucas Ricci

//Somar número com string, continua sendo uma string se testado com o typeof
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase + ',\ntipo de dado: ' + typeof frase); // Romário fez 1000 gols, tipo de dado: string
//Obs: o \n quebra a linha

//Somando Numeros com Strings
var numero1 = '2018';
var numero2 = 8;

//Vai concatenar a string 2018 com o número 8
console.log(numero1 + numero2)  // 20188 

//Convertendo string para number
console.log(+numero1 + numero2) // 2026

//Aspas duplas, Simples e Template Strings
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil"; //Escapando aspas duplas
`JavaScript é "super" fácil`;
// "JavaScript é "super" fácil"; // Inválido


//Template Strings
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase1);
console.log(frase2);