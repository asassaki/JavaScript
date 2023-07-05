// Tipagem Estática -> Definição de um tipo a cada variável (Java, C, C++, TypeScript)
// Tipagem Dinâmica -> O tipo da variável é definido de acordo com o seu valor (JavaScript, Python)

// typeof -> Operador que retorna o tipo da variável

let variavel = 22;
console.log(typeof variavel); // number

variavel = 79.85;
console.log(typeof variavel); // number

variavel = "Aline Sassaki";
console.log(typeof variavel); // string

variavel = true;
console.log(typeof variavel); // boolean

variavel = {nome:"Aline", idade: 29};
console.log(typeof variavel); // object

variavel = [1, 2, 3, 4, 3, 5];
console.log(typeof variavel); // object (vetor)

variavel = function() { return 1 };
console.log(typeof variavel); // function

variavel = undefined; 
console.log(typeof variavel); // undefinied

variavel = null;
console.log(typeof variavel); // object (null)

variavel = NaN; // NaN = Not a Number
console.log(typeof variavel); // number
