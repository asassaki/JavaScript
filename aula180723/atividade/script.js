// Crie uma função em JavaScript que recebe um vetor de objetos representando alunos e monta uma tabela HTML dinamicamente com base nesses dados. Cada objeto no vetor representa um aluno e possui as propriedades "nome", "idade" e "nota". Sua tarefa é percorrer o vetor de objetos e gerar uma tabela no formato HTML, exibindo os dados de cada aluno em linhas separadas. Cada linha da tabela deve conter três colunas: uma para o nome, outra para a idade e a última para a nota do aluno. Certifique-se de que a tabela gerada seja exibida corretamente no documento HTML.

let alunos = [
  {
    nome: "Aline Sassaki",
    idade: 24,
    nota: 10.0
  },
  {
    nome: "Lucas Figueiredo",
    idade: 30,
    nota: 8.0
  },
  {
    nome: "Felipe Laudano",
    idade: 21,
    nota: 9.5
  }
];

function gerarTabela() {
  const tabela = document.querySelector("#tabela-aluno");
  for(let aluno of alunos) {
    tabela.innerHTML += `
    <tr>
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.nota}</td>
    </tr>
    `;
  }
};

gerarTabela();
