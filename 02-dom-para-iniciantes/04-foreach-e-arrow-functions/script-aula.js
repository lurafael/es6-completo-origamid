//forEach
//Pegando todas as imagens do site
const images = document.querySelectorAll('img');

images.forEach(function(image) {
  return console.log(image);
});

//Arrow functions

let i = 0;
images.forEach(() => {
  return console.log(i++);
}); 

//Informações:
//Se eu tiver só um item no parâmetro, não preciso passar os parênteses
//Se eu tiver só uma linha de comando, posso usar uma versão ainda mais limpa sem as chaves e
//sem o return:

i = 0;
images.forEach(() => console.log(i++));  


