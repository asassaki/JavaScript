/*
for(inicialização; condição; incrementação) {
  // repetição...
}

Uma quantidade indeterminada de repetições
white(condição) {
  // repetição;;;
}
*/

// console.log("Teste 1");
// console.log("Teste 2");

// let i = 0;
// while(i < 10) {
//   console.log("Teste while " + i);
//   i++;
// }

// console.log("Teste 3");
// console.log("Teste 4");

// Desenho de um quadrado de # na tela
// let lado = 7;
// for(let i = 0; i < lado; i++) {
//   let linha = "";
//   for(let j =0; j < lado; j++) {
//     linha += "# ";
//   }
//   console.log(linha);
// }

// let lado = 7;
// let linha = "";

// for(let i = 0; i < lado; i++) {
//   linha += "# ";
// }
// for(let i = 0; i < lado; i++) {
//   console.log(linha);
// }

// break e continue
for(let i = 1; i <= 20; i++) {
  if(!(i % 2 == 0)) {
    continue; // ignora o loop || pula o loop
  }
  console.log(i);
}

// Imprime o primeiro numero multiplo de 8
for(let i = 1; i <= 20; i++) {
  if((i % 8 == 0) && (i != 8)) {
    console.log(i);
    break;
  }
}