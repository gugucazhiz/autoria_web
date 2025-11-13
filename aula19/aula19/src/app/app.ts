import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tarefa} from "../shared/model/Tarefa"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(){
  }
  nome : String = "Gustavo"
  tarefas =[
    new Tarefa("Caminhar"),
    new Tarefa("Trotar"),
    new Tarefa("Correr"),
  ];


  deleteHero(aSerDeletado: number){
      this.tarefas.splice(aSerDeletado,1);
      console.log(this.tarefas)
  }

  delete(){

  }
  protected readonly title = signal('aula19');
}
