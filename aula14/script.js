const oka = document.getElementById("ok");

oka.addEventListener("mouseover", () =>{
 alert("Alo Som");
});

let i =0;
const contador = () => {
    i++;
    console.log(i);
    const relogio = document.getElementById("relogio");
    relogio.innerText = i;
}

const buttonStart = document.getElementById("start");
const buttonEnd = document.getElementById("end");

let temporizador;

buttonStart.addEventListener("click", () => {
    temporizador = setInterval(contador,1);
});

buttonEnd.addEventListener("click", () => {
    clearInterval(temporizador);
    i=0;
})