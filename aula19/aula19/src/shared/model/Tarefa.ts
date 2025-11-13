export class Tarefa {
    public texto: string;
    public feito: boolean;

    constructor(texto: string, feito: boolean = false){
        this.texto =texto;
        this.feito = feito;
    }
}