// Estruturas Condicionais
// Condição -> Cálculo lógico
// if = se

const altura = 1.55;
if(altura >= 1.60)
console.log("Permitido entrar no brinquedo!"); // a instrução é ignorada
else
  console.log("Não é permitido entrar no brinquedo!"); // a instrução é executada

  let nivelIngles = 7;
  if(nivelIngles == 1)
    console.log("Nível Iniciante");
  else if(nivelIngles == 2)
    console.log("Nivel Básico");
  else if(nivelIngles ==3)
    console.log("Nivel Intermediário");
  else if(nivelIngles == 4)
    console.log("Nível Avançado");
  else if(nivelIngles ==5)
    console.log("Nível Fluente");
  else
    console.log("Nível desconhecido");

let opcao = "Arquivo";
if(opcao == "Arquivo") // true or false
  console.log("Novo, Abrir, Configurações"); //true
else if(opcao == "Editar")
  console.log("Desfazer/ Refazer/ Copiar");
else if(opcao == "Ver")
  console.log("Buacar, Aparência, Explorar");

  let conseguiuFazerCompra = false;
  let saldo = 300;
  if(saldo > 200){
    console.log("Faz a compra do tênis");
    conseguiuFazerCompra =  true;
  }
  else{
    console.log("Sem grana suficiente");
    conseguiuFazerCompra = false;
  }
  if(conseguiuFazerCompra){
    console.log("Conseguiu fazer a compra!");
  }

let n1 = 10, n2= 9, n3 = 1;
if(n1 > n2 && n1 > n3) {
  if(n2 > n3) {
    console.log(n1 + " > " + n2 + " > " + n3);
  }
  else {
    console.log(n1 + " > " + n3 + " > " + n2);
  }
}
else if(n2 > n1 && n2 > n3) {
  if(n1 > n3) {
    console.log(n2 + " > " + n1 + " > " + n3);
  }
  else {
    console.log(n2 + " > " + n3 + " > " + n1)
  }
}
else {
  if(n1 > n2) {
    console.log(n3 + " > " + n1 + " > " + n2);
  }
  else {
    console.log(n3 + " > " + n2 + " > " + n1);
  }
}

let mes = 7;
if(mes == 1) {
  console.log("Janeiro");
}
else if(mes == 2) {
  console.log("Fevereiro");
}
else if(mes == 3) {
  console.log("Março");
}
else if(mes == 4) {
  console.log("Abril");
}
else if(mes == 5) {
  console.log("Maio");
}
else if(mes == 6) {
  console.log("Junho");
}
else if(mes == 7) {
  console.log("Julho");
}
else if(mes == 8) {
  console.log("Agosto");
}
else if(mes == 9) {
  console.log("Setembro");
}
else if(mes == 10) {
  console.log("Outubro");
}
else if(mes == 11) {
  console.log("Novembro");
}
else if(mes == 12) {
  console.log("Dezembro");
}
else {
  console.log("Indefinido");
}

let mes2 = 11
switch(mes2) {
  case 1:
    console.log("Janeiro");
    break; // para o fluxo do switch
  case 2:
    console.log("Fevereiro");
    break; 
  case 3:
    console.log("Março");
    break; 
  case 4:
    console.log("Abril");
    break; 
  case 5:
    console.log("Maio");
    break; 
  case 6:
    console.log("Junho");
    break; 
  case 7:
    console.log("Julho");
    break; 
  case 8:
    console.log("Agosto");
    break; 
  case 9:
    console.log("Setembro");
    break; 
  case 10:
    console.log("Outubro");
    break; 
  case 11:
    console.log("Novembro");
    break; 
  case 12:
    console.log("Dezembro");
    break; 
}