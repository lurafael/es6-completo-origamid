//Usando função em cálculo
function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(total.toFixed(1)); // 15.7 - toFixed(valor) define quantas casas após o ponto vão existir)

//Cálculo de IMC com função nativa 
function imc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

console.log(imc(86, 1.95)); // 22.62

//Com arrow function
const imcArrow = (peso, altura) => (peso / (altura * altura)).toFixed(2);

console.log(imcArrow(86, 1.95)); // 22.62

//Chamadas de callback são funções
//Chamada padrão com função anônima
addEventListener('click', function() {
  console.log(clicou);
});

//Chamada com função separada
function handleClick() {
  console.log(clicou);
}
addEventListener('click', handleClick);

//Chamada de função com arrow function
addEventListener('click', () => console.log(clicou));

// Escopo de funções
//função de países visitados com arrow function e template string
var faltaVisitar = (paisesVisitados) => {
  var totalPaises = 193;
  
  return `Ainda falta visitar ${totalPaises - paisesVisitados} países!`; 
};

console.log(faltaVisitar(20));
console.log(totalPaises); //Não consigo chamar, pois essa variável só existe no escopo da função

//Funções conseguem pegar variáveis que foram criadas no contexto "Pai",
//mesmo que fora do escopo dela.

// Hoisting em funções
// Antes de executar uma função, o JS move todas as funções declaradas para a memória,
//então não importa muito se a função foi declarada antes ou depois da sua execução.

