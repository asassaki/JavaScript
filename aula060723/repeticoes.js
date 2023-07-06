// Estruturas de repetição

// Incrementa o valor do número em uma unidade
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// Incrementa o valor de número em duas unidades
for(let numero = 0; numero < 10; numero += 2) {
  console.log(numero);
}

//  contagem regressiva
for(let numero = 10; numero >= 0; numero--) {
  console.log(numero);
}

let goiaba = "suco"
if(true) {
  console.log(goiaba);
  let batata = "fritas";
  if(true) {
    console.log(batata)
  }
}

// for(atribuição; condição, reatribuição) {
  // codigo de repetição
// }

for(let numero = 0; numero < 100;) {
  numero++;
  console.log(numero);
}

// loop infinito
let n = 0;
while(n < 13) {
  console.log("SoulCode + Porto");
  n++;
}

// for -> uma quantidade de repetições determinadas
// while -> uma quantidade de repetições indeterminadas

let num = 80;
let ePrimo = true;
for(let i = 2; i < num; i++) {
  if(num % i == 0) {
    ePrimo = false;
  }
}
if(ePrimo) {
  console.log("É primo!!")
}
else {
  console.log("Não é primo!")
}