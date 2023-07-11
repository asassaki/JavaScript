// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let paragrafo = "Hoje é terça-feira.";
let nA = 0;
for(let i = 0; i < paragrafo.length; i++) {
  if(paragrafo.charAt(i) == "A" || paragrafo.charAt(i) == "a") {
    nA++;
  }
}
console.log("Parágrafo tem " + nA + " 'a's");

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let n = 121
console.log(Math.sqrt(n));
console.log(32 ** (1/5)); // raiz quintupla de 32

// Escreva um programa que arredonde um número para o inteiro mais próximo.
let num = 14.869
console.log(Math.round(num));

// Escreva um programa que calcule o valor absoluto de um número.
console.log(Math.abs(-140));

// Escreva um programa que gere um número aleatório entre 10 e 20.
let nRandom = Math.floor(Math.random() * (20 - 10 + 1) + 10);
console.log(nRandom);

// Arredonde um número para um número específico de casas decimais.
console.log(num.toFixed(1));

// Escreva um programa que converta uma string para um número decimal e arredonde para o número inteiro anterior.
let strg = "16.52";
strg = Number.parseFloat(strg)
console.log(Math.floor(strg));

// Verifique se um número é um valor finito, infinito, NaN ou não.
n = 10
if(isNaN(n)) {
  console.log("Not a Number");
}
else {
  console.log("Number");
}

if(isFinite(n)) {
  console.log("Finite");
}
else {
  console.log("Infinity");
}

// Escreva um programa que verifique se a string "ba" contém em outra string.
let frase = "Viajei para a Bahia ano passado"
let busca = "ba"
console.log(frase.toLowerCase().includes(busca.toLowerCase()));

// Escreva um programa que converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
let string = "JaVa"
console.log(string.toLowerCase());
console.log(string.toUpperCase());

// Extraia uma parte específica de uma string com base em índices.
console.log(frase.substring(14, 19));

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(frase.replaceAll("Bahia", "França"));

// Remova espaços em branco extras no início e no final e no final de uma string.
let texto = " Aline Sassaki "
console.log(texto.trim());

// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for(let i = texto.length-1; i >= 0; i--) {
  textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);