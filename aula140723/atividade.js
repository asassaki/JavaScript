// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
const vetor = [7, 9, 4, 5, 2, 1]
console.log(vetor.reduce((acumulador, n) => (acumulador + n), 0));

// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
let v1 = ["Aline", "Sassaki"]
let juncao = v1.join(" ");
console.log(juncao);

// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
function maiorDoVetor(numeros) {
  let maior = numeros[0];
  for(let n of numeros) {
      if(n > maior) {
          maior = n;
      }
  }
  return maior;
}
console.log("O maior numero do vetor é " + maiorDoVetor(numeros));

// Crie uma função que receba um vetor de números e retorne a média dos elementos.
function mediaDoVetor(numeros) {
  let total = 0;
  let tamanho = numeros.length;
  for(let n of numeros) {
      total += n;
  }
  return total/tamanho; // media
}
console.log("A média dos numeros do vetor é " + mediaDoVetor(numeros));

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
console.log(vetor.map(n => n ** 2));

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
let nome = ["Aline", "Lucas", "Douglas", "Adriano", "Gabriela"]
console.log(nome.filter(nome => nome.includes("A")));

// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
vetor.forEach(n => console.log(n * 3)); 

// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
console.log(vetor.includes(10));