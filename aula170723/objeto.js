// Objeto -> Estrutura que representa um objeto do mundo real (ex. Produto, Pessoa, Profissão)
// Objeto pode ser modelado -> Classe

class Livro {
  titulo;
  pagina;
  autor;
  isbn;

  alugar = function() {
    console.log("Alugado")
  };

  static isLivro(livro) {
    let flag = livro.titulo == undefined;
    return !flag;
  }

  concat() {
    return `${this.titulo} escrito por ${this.autor}`;
  }

  constructor(titulo, pagina, autor, isbn) {
    this.titulo = titulo;
    this.pagina = pagina;
    this.autor = autor;
    this.isbn = isbn;
    // this -> referência a classe/ objeto
  };

};

// Para criar a estrutura "física" do objeto pela classe é necessário fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro("", "", "", ""); // instância do objeto Livro
// console.log(arquiteturaLimpa);

arquiteturaLimpa.titulo = "Orgulho e Preconceito";
arquiteturaLimpa.autor = "Jane Austen";
arquiteturaLimpa.pagina = 450;
arquiteturaLimpa.isbn = "978-85-508-0460-6"
console.log(arquiteturaLimpa);
arquiteturaLimpa.alugar();

let livroTeste = new Livro("Java para Iniciantes", 500, "Herbert", "978-85-508-0460-7");
console.log(livroTeste)

// Objeto é uma estrutura que representa o objeto do mundo real no nosso código
// Classe -> Plata ou o Modelo do objeto
// Instância -> É o processo de construir o objeto "new Livro()"
// Construtor -> É a função que gere o objeto físico
// Características -> Atributos, Propriedades, Métodos/ Funções

const objeto = {}; // cria um objeto sem classe
// console.log(typeof objeto);
console.log(objeto);

