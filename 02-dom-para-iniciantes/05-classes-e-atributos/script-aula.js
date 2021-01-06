//classList
//Retorno de um classList é um array-like, com as classes ocupando os índices,
// uma propriedade chamada value que guarda as classes e um length
const menu = document.querySelector('.menu');
console.log(menu);

//Add e Remove
menu.classList.add('ativo', 'azul', 'teste');
console.log(menu.classList);

menu.classList.remove('azul');
console.log(menu.classList);

//Toggle e Contains
//Toggle alterna o valor passado por parâmetro, se já tiver retira, se não tiver,
//adiciona na lista de classes
menu.classList.toggle('ativo');

//Contains retorna um valor booleano se a condição for verdadeira, então é possível
//usar em condicionais por exemplo
const contains = menu.classList.contains('teste')
  ? menu.classList.add('possui-teste')
  : menu.classList.add('nao-possui-teste');

//Existe a forma antiga de usar as mesmas props:
console.log(menu.className); //Lista as classes existentes
menu.className += ' forma-antiga'; //Adiciona na lista de classes

//ideal utilizar os métodos, mas se ver algum código assim é manipulação de classes


//Attributes
const animais = document.querySelector('.animais');
console.log(animais);

//O attributes traz os tipos de atributos que foram colocados na classe animais nesse caso,
//ele me retorna um NamedNodeMap que é como se fosse um objeto que dentro dele possui os atributos
//na sequencia que estão no HTML (class, id e data-texto nesse caso).
console.log(animais.attributes);

//Posso acessar por índices igual array pois o NamedNodeMap possui estrutura para suportar esse tipo 
//de chamada:
console.log(animais.attributes[0]); //class=​"grid-section animais"
console.log(animais.attributes[1]); //id="animais"
console.log(animais.attributes[2]); //data-texto="teste"

//Também posso chamar pelo nome dos atributos, sem adivinhar em que posição estão 
console.log(animais.attributes.class);
console.log(animais.attributes.id);
console.log(animais.attributes['data-texto']);

//O mais padrão é usar o getAttribute e setAttribute para retornar ou definir de acordo com o atributo
//selecionado

//setAttribute
console.log(animais.getAttribute('class'));
console.log(animais.getAttribute('id'));
console.log(animais.getAttribute('data-texto'));

//Obs: O attributes.algo retorna a tag HTML inteira, já o setAttribute retorna em formato string
//o resultado do atributo.

//Posso setar com o setAttribute para definir se não existir, ou substituir se já tiver algum valor
animais.setAttribute('data-name', 'Lucas'); //Adiciona um atributo chamado data-name com valor Lucas

//Posso fazer verificações com o hasAttribute
const possuiDataName = animais.hasAttribute('data-name');
console.log('Possui data-name? ' + possuiDataName);


