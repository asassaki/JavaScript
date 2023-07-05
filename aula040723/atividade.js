// Escreva um programa que verifique se um número é par ou ímpar.

let numero = 97;
let condicao = ((numero % 2) == 0);
let mensagem = condicao ? "Par" : "Ímpar";
console.log(mensagem);

// Faça um programa que calcule a média aritmética de três números.
let n1 = 5;
let n2 = 9;
let n3 = 6;
let media = ((n1 + n2 + n3) / 3);
console.log(media);


// Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.

let num = 15;
let result = (num % 3 == 0)  && (num % 5== 0);
console.log(result);


// Faça um programa que calcule a área de um triângulo com base e altura.

let base = 5;
let altura = 7;
let area = ((base * altura) / 2);
console.log(area);


// Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.

let x = 100;
let conversao = ((x * 1.8) + 32);
console.log(conversao);


// Faça um programa que calcule o delta das funções de segundo grau. b^2 - 4 * a * c

let a = 3;
let b = 2;
let c = 1;
let delta = b**2 - 4 * a * c;
console.log(delta);


// Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).

let idade = 3;
let condicao2 = idade >=18;
mensagem2 = condicao ? "Pode dirigir" : "Não pode dirigir";
console.log(mensagem2);