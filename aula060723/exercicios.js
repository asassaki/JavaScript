// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let n = -6;
if(n > 0) {
  console.log("O número é positivo.");
}
else if(n < 0) {
  console.log("O número é negativo.");
}
else {
  console.log("O número é igual a zero.");
}

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 5;
if(idade >= 18) {
  console.log("Maior de idade.")
}
else {
  console.log("Menor de idade.");
}

// Escreva um programa que receba três números e determine qual deles é o maior.
let a = 50, b = 14, c = 50;
if(a > b && a > c) {
  console.log("Maior número: " + a);
}
else if(b > a && b > c) {
  console.log("Maior número: " + b);
}
else if(c > a && c > b) {
  console.log("Maior número: " + c);
}
else {
  console.log("Maior número não pode se repetir.");
}

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.
let n1 = 3;
let n2 = 5;
if((n1 * n2) % 2 == 0) {
  console.log("Par");
}
else {
  console.log("Ímpar");
}

// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "cachorro";
if(dia == "sabado" || dia == "domingo") {
  console.log("Fim de semana.");
}
else if( dia == "segunda") {
  console.log("Dia útil.");
}
else if( dia == "terça") {
  console.log("Dia útil.");
}
else if( dia == "quarta") {
  console.log("Dia útil.");
}
else if( dia == "quinta") {
  console.log("Dia útil.");
}
else if( dia == "sexta") {
  console.log("Dia útil.");
}
else {
  console.log("Dia da semana não identificado.");
}

// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let numero = 2;
switch(numero) {
  case 1: console.log("Domingo");
  break;
  case 2: console.log("Segunda-feira");
  break;
  case 3: console.log("Terça-feira");
  break;
  case 4: console.log("Quarta-feira");
  break;
  case 5: console.log("Quinta-feira");
  break;
  case 6: console.log("Sexta-feira");
  break;
  case 7: console.log("Sábado");
  break;
  default: console.log("Inválido. Digite um número entre 1-7.")
}