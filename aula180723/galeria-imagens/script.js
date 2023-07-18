const imagens = [
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/259585/pexels-photo-259585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

let indiceAtual = 0;

function galeria() {
  let imagem = document.querySelector("#galeria");
  imagem.src = imagens[indiceAtual];
  if(indiceAtual == imagens.length-1) {
    indiceAtual = 0;
  }
  else {
    indiceAtual++;
  }
  
}

setInterval(galeria, 2000);