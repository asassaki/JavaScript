function somar(n1, n2) {
  let soma = n1 + n2;
  return soma;
}

function dividir(num, den) {
  if(den == 0)
    return;
  return(num / den);
}

const num = dividir(22, 4);
console.log(num);

// callback -> função passado como parametro de outra função

let numError = 0;

function requisicaoBanco(callbackSuccess, callbackError) {
  for(let i = 0; i < 100000000; i++) { // isso vai demorar alguns segundos
    if( i === -1000) {
      // aqui gerou um erro
      callbackError();
    }
  }
  callbackSuccess();
}

function sucesso() {
  console.log("Sucesso")
}

function erro() {
  numError++;
  console.log("Erro")
}

requisicaoBanco(sucesso, erro);

// Função Anônima

// function teste() {
//   console.log("Hello World");
// }

// setInterval(teste, 2000);

setTimeout(function() {
  console.log("Olá, Mundo!");
}, 3000);


// Exemplo de como declarar função anônima (não é usual)

// let funAno = function() {
// }

// function funAno() {
// }

// Arrow Functions -> Funções de Seta -> Funções Anônimas

// setTimeout(function() {
//   console.log("SetTimeout com Função Anônima");
// }, 2000);

setTimeout(() => {
  console.log("SetTimeout com Função Arrow");
});

// function() {
// }

// () => {
// }

// parametros => escopo/ instrução
// () => {}

// Testando a utilização das arrow functions
function teste(callback) {
  let valor = callback(130);
  console.log(valor);
}

// Primeira forma de executar "teste"
function vezes2(numero) {
  return(numero * 2);
}
teste(vezes2);

// Segunda forma de executar "teste" (função anônima)
teste(function(numero) {
  return(numero * 2);
});

// Terceira forma de executar "teste" (função arrow) - Modo 1
teste((numero) => {
  return(numero * 2);
});

// Quarta forma de executar "teste" (função arrow) - Modo 2
teste(numero => numero*2); // pode-se omitir o "return" e as chaves quando há apenas uma instrução

// setTimeout(_ => console.log("Olá, mundo!"), 3000);
// _ == () utiliza-se quando não há parâmetros

// Recursividade -> Chamada de uma função pela mesma função

function fatorial(numero) {
  if(numero == 1) {
    return 1;
  }
  return numero * fatorial(numero - 1);
}
console.log(fatorial(4)); // 4! = 4 * 3 * 2 * 1 = 24


