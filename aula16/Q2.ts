enum DiaDaSemana{
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta
}

function recebeDia(DiaDaSemanaobj : DiaDaSemana): void{
    console.log(DiaDaSemana[DiaDaSemanaobj])
}

const dia : DiaDaSemana = DiaDaSemana.Terca;

recebeDia(dia);