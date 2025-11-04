function repd(numero: number | String) : String | number {
    if(typeof numero === 'string'){
        return numero.toUpperCase();
    }
    else{
        return numero;
    }
}

console.log(repd(2));
console.log(repd("alo world"));