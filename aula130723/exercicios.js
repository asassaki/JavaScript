// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
function mediaPonderada(n1, n2, n3) {
  return((n1*2 + n2*3 + n3*4) / 9);
}
console.log("Média ponderada: " + mediaPonderada(6, 7, 8));

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.
function numDiv(num) {
  let qtd = 0;
  for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
      qtd++;
    }
  }
  return qtd;
}
console.log("Quantidade de divisores: " + numDiv(78));

// Crie uma função que calcule a soma de todos os dígitos de um número.
function nDigitos(num) {
  let nTexto = num.toString();
  let acumulador = 0;
  for(let i = 0; i < nTexto.length; i++) {
    acumulador += parseInt(nTexto.charAt(i));
  }
  return acumulador;
}
console.log("Soma dos dígitos: " + nDigitos(4629));

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.
function reverter(texto) {
  let textoRevert = "";
  for(let i = texto.length-1; i >= 0; i--) {
    textoRevert += texto.charAt(i);
  }
  return textoRevert;
}
console.log(reverter("Olá, mundo!"))

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
function velMedia(comp, tempo) {
  return(comp / tempo);
}
console.log("Velocidade média: " + velMedia(30, 2) + "km/h");

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.
function isVogal(char) {
  switch(char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
  }
  return false;
}

function removeVogal(texto) {
  let textoSemVogal = "";
  for(let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i);
    if(!isVogal(char)) {
      textoSemVogal += char;
    }
  }
  return textoSemVogal;
}
console.log(removeVogal("JavaScript"))

// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário.

// opção 1
function converter(n) {
  let nBinario = "";
  let div = n;
  for(;;) {
    if(div <= 0)
    break;
    let resto = n % 2;
    div = parseInt(div / 2);
    nBinario = resto + nBinario;
  }
  return nBinario;
}
console.log(converter(345));

// opção 2 (com recursividade)
function converterDecBin(num) {
  if(num <= 0)
  return "";
  let divisao = parseInt(num / 2);
  let resto = (num % 2).toString();
  resto = converterDecBin(divisao) + resto;
  return resto;
}
console.log(converterDecBin(25));


// let n = 10;
// console.log(n.toString(10));
// console.log(n.toString(2));
// console.log(n.toString(8));
// console.log(n.toString(16));

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
function repetir(callback, interaction) {
  for(let i = 0; i < interaction; i++) {
    callback(i);
  }
}
repetir(index => console.log(index+1), 10);