// Função

// Funções que recebem parâmetros
// Funções que não recebem parâmentros
// Funções que retornam valores
// Funções que não retornam valores

// Argumentos -> Parâmetros

function somar(n1, n2 = 10) {
  console.log("Número 1 é " + n1);
  console.log("Número 2 é " + n2);
  console.log(n1 + n2);
}
somar(30);
somar(30, 15);


function soma(n1, n2) {
  let soma = n1 + n2;
  return soma;
}

let result = soma(30, 15);
console.log(result);

function calc(n1, n2, op = "+") {
  switch(op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
  }
  return NaN;
}

console.log(calc(80, 6)); // 86
console.log(calc(-56, 9, "-")); // 65
console.log(calc(-56, 0, "*")); // 0
console.log(calc(18, 2, "somar")); // NaN

// Entrada
// Processamento
// Saída

function desenhaTriangulo(altura) {
  for(let i = 1; i <= altura; i++) {
    let linha = "";
    for(let j = 0; j < altura-i; j++) {
      linha += " ";
    }
    for(let j = 0; j < i; j++) {
      linha += "* ";
    }
    console.log(linha);
  }
}

desenhaTriangulo(8);

