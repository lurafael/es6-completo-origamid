//Crie um objeto com os seus dados pessoais
var person = {
  firstName: 'Lucas',
  lastName: 'Ricci',
  age: 27,
  address: 'Rua Sete de Setembro',
  city: 'Santa Ernestina',
  state: 'São Paulo'
}

//Crie um método no objeto anterior, que mostre o seu nome completo
person.fullName = `${person.firstName} ${person.lastName}`;

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var dog = {
  breed: 'labrador',
  color: 'black',
  age: 10,
  bark(person) {
    if(person === 'man')
      return 'O cachorro está latindo!';
    return 'O cachorro está tranquilão';
  }
}