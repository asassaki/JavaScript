class Pessoa {
  nome;
  idade;
  email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Aline";
pessoa1.idade = 25;
pessoa1.email = "aline@teste.com"
console.log(pessoa1);

let pessoa2 = { // mesmo objeto pessoa, mas não foi construido por meio da classe Pessoa
  nome: "Gabriel", // chave: valor
  idade: 24,
  email: "gabriel@teste.com"
};

const vetor = ["aline", "lucas", "gabriel"];
console.log(vetor[1]); // estrutura vetor
const objeto = {nome: "aline", email: "aline@example.com"}
console.log(objeto.nome); // estrutura objeto
console.log(objeto["nome"]); // válido, acessa a propriedade nome do objeto - não é usual

const pc = {
  ram: 16,
  disco: 1,
  processador: "19 intel",
  fonte: "100w",
  placa: "Gigabyte"
};

const saldo = 4500;
if(saldo > 4000) {
  pc.placaVideo = "RTX 3080";
}

console.log(pc);

let n1 = 2;
let n2 = n1; // faz uma copia de n1 e passa para n2
n1 = 3; // não afeta o n2
console.log(n1); // 3
console.log(n2); // 2


// Forma incorreta de copiar um objeto
// let objeto1 = {nome: "Bruna", curso: "JavaScript"};
// let objeto2 = objeto1; // não é feito uma copia do objeto, e sim da referência dele na memória
// objeto1.nome = "Bruna Muller";
// console.log(objeto1);
// console.log(objeto2);

// Forma correta de copiar um objeto -> Operador spread "..."
let objeto1 = {nome: "Bruna", curso: "JavaScript"};
let objeto2 = {...objeto1}; // copia os elementos do objeto1 e "espalha" no objeto2
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome; // remove a propriedade "nome" do objeto
console.log(objeto1);