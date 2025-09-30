let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "character.png";

const largura = 150;
const altura = 190;

imagem.onload = function(){
    ctx.drawImage(imagem,0,0,largura,altura,0,0,largura,altura);
};
