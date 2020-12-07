//Array
var videoGames = ['Switch', 'PS4', 'Xbox'];

//Acessando índices do array
console.log(videoGames[0]);
console.log(videoGames[2]);

//Métodos e propriedades de arrays
//Como um array criado herda do objeto Array, teremos todas suas propriedades e métodos para trabalhar, então sempre verificar quando for fazer algo se já existe uma propriedade ou método para aquela coisa, alguns exemplos:

// .pop remove o último item, e o retorno é o item excluído... Tem como usar para guardar em uma variável por exemplo
console.log(videoGames.pop()); // Xbox 
console.log(videoGames); // ["Switch", "PS4"]

// .push adiciona o argumento passado ao parâmetro ao final do array, e retorna o lenght agora com a adição do item
console.log(videoGames.push('3DS', 'Xbox')); // 4 
console.log(videoGames); // ["Switch", "PS4", "3DS", "Xbox"]

//Loops - For
for(var item = 0; item < videoGames.length; item++) {
  console.log('for: ', videoGames[item]);
}

var i = 0;

while(i < 4) {
  console.log('while: ', videoGames[i]);
  i++;
}

//Forma padrão ES5
videoGames.forEach(function(videoGame) {
  console.log('forEach ES5: ' + videoGame);
});

//Forma com arrow function
videoGames.forEach(videoGame => console.log(`forEach ES6+: ${videoGame}`));

