// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var years = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

//Com for padrão
for(let i = 0; i < years.length; i++) {
  console.log(`For: O brasil ganhou a copa de ${years[i]}`);
}

// Com forEach
years.forEach(function(year) {
  console.log(`ForEach: O brasil ganhou a copa de ${year}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if(frutas[i] === 'Pera')
    break;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFruit = frutas[frutas.length - 1];

// Forma de fazer com um método de array
// var lastFruit = frutas.slice(- 1); //Não altera o array principal

console.log(lastFruit); //Melancia
console.log(frutas); //["Banana", "Maçã", "Pera", "Uva", "Melancia"]