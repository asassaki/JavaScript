// Função ou function -> Rotina
// Number -> Biblioteca

let n1 = 4;
let n2 = 5;

function multiplicar() {
  console.log("Primeiro número: " + n1);
  console.log("Segundo número: " + n2);
  console.log("Produto: " + (n1 * n2));
}

multiplicar();


// Funções Numéricas

let result = isNaN(NaN); // true/ false
console.log(result);

result = isFinite(Infinity);
console.log(result);

result = Number.parseInt(12.4); // conversão do float para int
console.log(result);

result = Number.parseFloat(12); // conversão de int para float
console.log(result)

result = Number.isInteger(parseFloat(12)); // inteiro (true/ false)
console.log(result);

let numero = 22.548;
console.log(numero.toFixed(2));
console.log(numero.toPrecision(4));

numero = numero.toString();
console.log(numero);

// Funções de Texto

const texto = " Java Script";

console.log(texto.charAt(0)); // imprime o caractere da posição 0

console.log(texto.concat(" é muito bacana.")); // concatena 

console.log(texto.charAt(texto.length-1)); // imprime o último caractere (Texto length começa de 1. O texto começa em 0)

console.log(texto.trim());

console.log(texto.replaceAll(" ", ""));

console.log(numero.replace(".", ","));

console.log(texto.includes("Java"));

console.log(texto.toLowerCase());

console.log(texto.toUpperCase());

let busca = "JaVa";
console.log(texto.toLowerCase().includes(busca.toLowerCase()));

let textoMin = texto.toLowerCase();
let buscaMin = busca.toLowerCase();
console.log(textoMin.includes(buscaMin));

// console.log(texto.replace("J", "A").replace("V", "T").replace("A", "H")); // funciona perfeitamente

console.log(texto.indexOf("Script"));

console.log(texto.substring(0, 5));

// Math -> Biblioteca Matemática

console.log(Math.ceil(2.3789)); // arredonda para cima
console.log(Math.floor(2.3789)); // arredonda para baixo
console.log(Math.round(2.773)); // arredonda para o mais próximo
console.log(Math.sqrt(121)); // raiz quadrada
console.log(Math.abs(-8));
console.log(Math.random()); // [0, 1[
console.log(Math.floor(Math.random() * 100 + 1)); // [1, 100]
