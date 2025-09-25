function calcular(){
    let peso = document.getElementById("numeroPeso").value;
    let altura = document.getElementById("numeroAltura").value;
    

    let calculo = (peso / (altura*altura));

    alert("IMC: "+calculo)
}