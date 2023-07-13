// Vetores - Arrays
let nota = 9.6; // variavel simples
let notas = [6.5, 7.8, 9.0]; // variavel composta
let grifes = ["Gucci", "Prada", "Dior"];
let ativados = [true, false, false, true];
console.log(typeof nota); // number
console.log(typeof notas); // object
console.log(notas.length); // tamanho do vetor

let pesos = [89.5, 47.5, 60.0, 75.3, 65.5];
console.log(pesos[1]); // indice -> numero que representa a posição do elemento no vetor e começa de "0"
console.log(pesos[pesos.length-1]);
console.log(pesos[0] + pesos[1]);

for(let i = 0; i < pesos.length; i++) {
  console.log(pesos[i]); // iterar sobre o vetor
}

// vetor de funções
let operacoes = [
  (n1, n2) => n1 + n2,
  (n1, n2) => n1 - n2,
  (n1, n2) => n1 * n2,
  (n1, n2) => n1 / n2
];

console.log(operacoes[0](3, 4)); // válido, mas não usual

// console.log(pesos);
// pesos[2] *=2;
// console.log(pesos);

// console.log(pesos); // before
// for(let i = 0; i < pesos.length; i++) {
//   pesos[i] *= 2;
// }
// console.log(pesos); // after

// somar todos e multiplicar por 2
let acumulador = 0;
for(let i = 0; i < pesos.length; i++) {
  acumulador += pesos[i];
}
console.log(acumulador*2);

// quando os indices do vetor
for(let peso of pesos) { // for each -> iterar sobre os vetores
  console.log(peso); 
}

// quando os indices do vetor
for(let indice in pesos) { // for each -> iterar sobre os vetores
  console.log(indice);
  console.log(pesos[indice]);
}