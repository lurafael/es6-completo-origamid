// Objeto pessoa com propriedades
var pessoa = {
  nome: 'Lucas',
  idade: 28,
  estudaJS: true,
}

console.log(pessoa.nome);     // Lucas
console.log(pessoa.idade);    // 28
console.log(pessoa.estudaJS); // true

//Desestruturação de objeto - Só pra lembrar, não tem isso no curso
const { nome, idade, estudaJS } = pessoa;

console.log(nome, idade, estudaJS); // Lucas 28 true

//Objeto quadrado com propriedades e métodos
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado; // O this faz referência ao objeto quadrado nesse caso
  } 
}

console.log(quadrado.lados);        // 4
console.log(quadrado.area(4));      // 16
console.log(quadrado.perimetro(5)); // 20

//Objeto Math
console.log(Math.PI);       // 3.141592653589793
console.log(Math.random()); // 0.9846182061989004
//Digitando Math. podemos ver todos os métodos e propriedades que existem :)

//Adicionar metodos e propriedades
pessoa.estudaJava = true;

console.log(pessoa); // {nome: "Lucas", idade: 28, estudaJS: true, estudaJava: true}

// Palavra chave this
var height = 120;
var menu = {
 width: 800,
 height: 50,
 metadeHeight() {
 return this.height / 2;
 }
}
console.log(menu.metadeHeight()); // 25
// sem o this, seria 60 porque é um escopo "Pai"

//Verificar se existe a propriedade
console.log(menu.hasOwnProperty('height')); //true
console.log(menu.hasOwnProperty('nome'));   //false