function resposta(){  
   let valor = document.getElementById("nomeDigitado");
   conteudo = valor.value;
   if(conteudo.length < 5){
        valor.className = "error";
   }else{
        valor.className = "";
        alert("Correto !")
        let elementos = document.getElementsByTagName("p")
        let i = 0;
        for(let e of elementos){
            console.log(e.innerText);
            i ++;
       }
       alert(i);
   }


   
}