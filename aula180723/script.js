// window.document -> Objeto que representa o documento HTML
// window.document.getElementById() -> Busca pelo id do elemento
// document.getElementsByClassName() -> Busca todos os elementos por class
// document.getElementsByTagName() -> Busca todos os elementos pelo nome da tag
// document.querySelector() -> Busca do elemento


// window.document.getElementById():
let h1 = document.getElementById("titulo"); // é muito utilizado antes
// let titulo = document.querySelector("#titulo"); // paralelo do getElementById
let paragrafos = document.getElementsByClassName("paragrafo");
let negritos = document.getElementsByTagName("b");
let inputEmail = document.querySelector("input[type=email]");
let negritoParagrafo = document.querySelector("p b"); // é muito aplicado hoje
let negritosParagrafo = document.querySelectorAll("p b"); // é muito aplicado hoje

// titulo.align = "center";
// titulo.title = "Titulo principal";
// titulo.style.color = "violet";
// titulo.style.fontSize = "30px";

let paragrafo = document.querySelector(".paragrafo");
paragrafo.innerHTML = "Hoje na aula de <b>JavaScript</b> aprendemos sobre DOM. Entendi que podemos criar muitas coisas."
console.log(paragrafo.innerText); // conteudo textual do elemento
console.log(paragrafo.innerHTML); // conteudo textual do elemento

// uso de classes com JS
let caixa = document.querySelector("#info");
caixa.classList.add("erro"); // adiciona uma nova classe
caixa.classList.remove("mensagem"); // remove uma classe
caixa.classList.toggle("atencao"); // adiciona se não existe
caixa.classList.toggle("atencao"); // remove se existe
console.log(caixa);