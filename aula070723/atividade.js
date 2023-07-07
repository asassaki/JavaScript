// Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for(let numero = 1; numero <= 20; numero++) {
  console.log(numero)
}

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
let p = 0; // penultimo
let u = 1; // ultimo
let i = 0; // contador
while(i < 10) {
  console.log(p);
  let soma = p + u;
  p = u;
  u = soma;
  i++;
}

// Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
let numero = 5;
let soma = 0;
for(let i = 1; i <= numero; i++) {
  if(i % 2 == 1) {
    soma += i;
  }
}
console.log(soma);

// Faça um programa que receba um número e exiba a tabuada desse número usando um loop for.
let n = 10;
for(let x = 0; x <= 10; x++) {
  let calculo = n + x;
  console.log(n + " + " + x + " = " + calculo);
}

// Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
for(let n = 1; n <= 100; n++) {
  if(n % 7 == 0) {
    console.log(n);
  }
}

// Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".
let linha = "";
let altura = 6;
for(let i = 0; i < altura; i++) {
  linha += "* ";
  console.log(linha);
}

// quadrado
let lado = 5;
let horizontal = "";
for(let i = 0; i < altura; i++) {
  horizontal += "# ";
}
for(let i = 0; i < altura; i++) {
console.log(horizontal);
}

// quadrado com @ com interior vazio
let lat = 5;
let line = "";
for(let y = 1; y <= lat; y++) {
  line = "";
  for(let x = 1; x <= lat; x++) {
    if(y == 1 || y == lat || x == 1 || x == lat) {
      line += "@ ";
    }
    else {
      line += "  ";
    }
  }
  console.log(line);
}
