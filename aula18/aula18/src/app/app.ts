import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Tarefa from '../shared/model/Tarefa';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '/app-root.html',
  styleUrl: './app.css'
})
export class App {


  constructor(){}
  
    saudacao: String ="bom dia, turma" ;
    tarefas = [
      new Tarefa("estudar",false), 
      new Tarefa("jogar lol",false)
    ];

  protected readonly title = signal('aula18');
}
