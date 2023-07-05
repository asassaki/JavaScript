// Operadores Aritméticos

let result;
result = 4 + 9; // 9
console.log(result);

result = 9 * 3; // 27
console.log(result);

result = ((3 + 7) * 12) / 6; // 20
console.log(result);

// Operadores de Atribuição
// result = result + 30;

result += 30;
console.log(result); // 50

result -= 45;
console.log(result); // 5

result *= 7;
console.log(result); // 35

result %= 9;
console.log(result); // 8

result /= 2;
console.log(result); // 4

result **= 2;
console.log(result); // 16

// Operadores Incremento e Decremento
/* 
a++ -> Pós incremento
++a -> Pré incremento
a-- -> Pós decremento
--a -> Pré decremento
*/

let a = 23;
console.log(a); // 23

console.log(a++); // 23

console.log(++a); // 25

console.log(--a); // 24

console.log(a--); // 24

console.log(a); // 23

// Operadores Relacionais (true, false -> booleano)
/* 
< Menor que
> Maior que
<= Menor ou igual
>= Maior ou igual
== Igual a
=== Igual a e mesmo tipo
*/

const n1 = 9;
const n2 = 11;
const n3 = 9;
const n4 = 13;
const n5 = "11";

result = n1 < n2;
console.log(result); // true

result = n1 > n2;
console.log(result); // false

result = n1 <= n2;
console.log(result); // true

result = n1 < n3;
console.log(result); // false

result = n1 <= n3;
console.log(result); // true

result = n1 >= n3;
console.log(result); // true

result = n3 == n4;
console.log(result); // false

result = n1 == n3;
console.log(result); // true

result = n1 != n3;
console.log(result); // false

result = n1 != n4;
console.log(result); // true

result = n2 === n5;
console.log(result); // false

result = "Aline" == "Aline";
console.log(result); // true

result = "Aline Sassaki" == "Aline Silva";
console.log(result); // false

// Operadores Lógicos
/*
&& -> E
|| -> OU
! -> NÃO
Prioridade: ! > && > ||
*/

console.log(true);
console.log(false);

console.log(true && true); // true
console.log(true && false); // false
console.log(true && true && true && false); // false
console.log(false && true); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(true || true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

console.log(!true || false); // false
console.log((true || true) && false); // false

// dada a idade, a pessoa é obrigada a votar
let idade = 16;
let calculo = idade >= 18 && idade <= 65;
console.log(calculo); // false

// Operador Ternário
// condição ? caso for verdadeiro : caso for falso
let mensagem;
let nota1 = 3;
let nota2 = 10;
let condicao = ((nota1 + nota2) / 2) >= 7;
mensagem = condicao ? "Aprovado" : "Reprovado"; // condição
console.log(mensagem);